import { model } from 'mongoose';
import { UserSchema } from '../schemas/user-schema';
import { OrderSchema } from '../schemas/order-schema';

const User = model('users', UserSchema);
const Order = model('order', OrderSchema);

export class UserModel {
  async findByEmail(email) {
    const user = await User.findOne({ email });
    return user;
  }

  async findByEmailandPhone(email, phoneNumber) {
    const user = await User.findOne({ email, phoneNumber });
    return user;
  }

  async findById(userId) {
    const user = await User.findOne({ _id: userId });
    return user;
  }

  async create(userInfo) {
    const createdNewUser = await User.create(userInfo);
    return createdNewUser;
  }

  async findAll() {
    const users = await User.find({});
    return users;
  }

  async update({ userId, update }) {
    const filter = { _id: userId };
    const option = { returnOriginal: false };

    const updatedUser = await User.findOneAndUpdate(filter, update, option);
    return updatedUser;
  }

  async deleteById(userId) {
    const user = await User.findOneAndDelete({ _id: userId });
    const order = await Order.deleteMany({ userId });

    console.log(order);
    return user;
  }

  async updatePw(email, newPasswordHash) {
    const user = await User.findOneAndUpdate(
      { email },
      {
        // hashPassword 로 업데이트 하기
        password: newPasswordHash,
      },
    );

    return user;
  }
}

const userModel = new UserModel();

export { userModel };
