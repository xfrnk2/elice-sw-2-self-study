import { userModel } from '../db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { generateRandomPassword } from '../utils/generate-random-password';
import { sendMail } from '../utils/send-mail';

class UserService {
  // 본 파일의 맨 아래에서, new UserService(userModel) 하면, 이 함수의 인자로 전달됨
  constructor(userModel) {
    this.userModel = userModel;
  }

  // 회원가입
  async addUser(userInfo) {
    // 객체 destructuring
    const { fullName, email, password, phoneNumber } = userInfo;

    if (!fullName || !email || !password || !phoneNumber) {
      throw new Error('required value is not allowed to be null');
    }

    // 이메일 중복 확인
    const user = await this.userModel.findByEmail(email);
    if (user) {
      throw new Error(
        'This email is currently in use. Please enter another email.',
      );
    }

    // 이메일 중복은 이제 아니므로, 회원가입을 진행함

    // 우선 비밀번호 해쉬화(암호화)
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUserInfo = {
      fullName,
      email,
      password: hashedPassword,
      phoneNumber,
    };

    // db에 저장
    const createdNewUser = await this.userModel.create(newUserInfo);

    return createdNewUser;
  }

  // 로그인
  async getUserToken(loginInfo) {
    // 객체 destructuring
    const { email, password } = loginInfo;

    if (!email || !password) {
      throw new Error('required value is not allowed to be null');
    }

    // 우선 해당 이메일의 사용자 정보가  db에 존재하는지 확인
    const user = await this.userModel.findByEmail(email);
    if (!user) {
      throw new Error(
        'This email has no subscription history. Please check again.',
      );
    }

    // 이제 이메일은 문제 없는 경우이므로, 비밀번호를 확인함

    // 비밀번호 일치 여부 확인
    const correctPasswordHash = user.password; // db에 저장되어 있는 암호화된 비밀번호

    // 매개변수의 순서 중요 (1번째는 프론트가 보내온 비밀번호, 2번쨰는 db에 있떤 암호화된 비밀번호)
    const isPasswordCorrect = await bcrypt.compare(
      password,
      correctPasswordHash,
    );

    if (!isPasswordCorrect) {
      throw new Error('Current passwords do not match. Please check again.');
    }

    // 로그인 성공 -> JWT 웹 토큰 생성
    const secretKey = process.env.JWT_SECRET_KEY || 'secret-key';

    // 2개 프로퍼티를 jwt 토큰에 담음
    const token = jwt.sign({ userId: user._id, role: user.role }, secretKey);

    const role = user.role;
    const data = [token, role];

    return data;
  }

  // 사용자 목록을 받음.
  async getUsers() {
    const users = await this.userModel.findAll();
    return users;
  }

  async getUser(userId) {
    const user = await this.userModel.findById(userId);

    if (!user) {
      throw new Error('There is no subscription history. Please check again.');
    }

    return user;
  }

  // 유저정보 수정, 현재 비밀번호가 있어야 수정 가능함.
  async setUser(userInfoRequired, toUpdate) {
    // 객체 destructuring
    const { userId, currentPassword } = userInfoRequired;

    // 우선 해당 id의 유저가 db에 있는지 확인
    let user = await this.userModel.findById(userId);

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!user) {
      throw new Error('There is no subscription history. Please check again.');
    }

    // 이제, 정보 수정을 위해 사용자가 입력한 비밀번호가 올바른 값인지 확인해야 함

    // 비밀번호 일치 여부 확인
    const correctPasswordHash = user.password;
    const isPasswordCorrect = await bcrypt.compare(
      currentPassword,
      correctPasswordHash,
    );

    if (!isPasswordCorrect) {
      throw new Error(
        '현재 비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요.',
      );
    }

    // 이제 드디어 업데이트 시작

    // 비밀번호도 변경하는 경우에는, 회원가입 때처럼 해쉬화 해주어야 함.
    const { password } = toUpdate;

    if (password) {
      const newPasswordHash = await bcrypt.hash(password, 10);
      toUpdate.password = newPasswordHash;
    }

    // 업데이트 진행
    user = await this.userModel.update({
      userId,
      update: toUpdate,
    });

    return user;
  }

  async deleteUser(toDeleteId, toDeletePw) {
    if (!toDeletePw) {
      throw new Error('check the requested body again');
    }

    // 우선 해당 id의 유저가 db에 있는지 확인
    let user = await this.userModel.findById(toDeleteId);

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!user) {
      throw new Error('There is no subscription history. Please check again.');
    }

    // 이제, 정보 수정을 위해 사용자가 입력한 비밀번호가 올바른 값인지 확인해야 함

    // 비밀번호 일치 여부 확인
    const correctPasswordHash = user.password;
    const isPasswordCorrect = await bcrypt.compare(
      toDeletePw,
      correctPasswordHash,
    );

    if (!isPasswordCorrect) {
      throw new Error('Current passwords do not match. Please check again.');
    }

    // 비밀번호 확인 후 사용자 삭제
    return await this.userModel.deleteById(toDeleteId);
  }

  async resetPw(userInfo) {
    const { email, phoneNumber } = userInfo;
    if (!email || !phoneNumber) {
      throw new Error('required value is not allowed to be null');
    }

    let user = await this.userModel.findByEmailandPhone(email, phoneNumber);
    if (!user) {
      throw new Error('There is no subscription history. Please check again.');
    }

    // 랜덤 패스워드 생성하기
    const password = generateRandomPassword();

    let newPasswordHash;
    // 비밀번호도 변경하는 경우에는, 회원가입 때처럼 해쉬화 해주어야 함.
    if (password) {
      newPasswordHash = await bcrypt.hash(password, 10);
    }

    // 패스워드 발송하기
    await sendMail(
      email,
      '비밀번호 변경',
      `<h1>비밀번호가 변경되었습니다.</h1>
      <br>
      <div>
        변경된 비밀번호는: <span style=" font: bold ; color: blue;">${password}</span> 입니다.
      </div>
      <div>
        <p>변경된 비밀번호 입력 후 로그인해 주세요.</p>
      </div>`,
    );

    // 업데이트 진행
    user = await this.userModel.updatePw(email, newPasswordHash);

    return user;
  }
}

const userService = new UserService(userModel);

export { userService };
