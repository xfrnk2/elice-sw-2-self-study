# 가이드

[https://xzio.tistory.com/1140](https://xzio.tistory.com/1140)

[https://expressjs.com/ko/4x/api.html#app](https://expressjs.com/ko/4x/api.html#app)


# 웹 동작 방식

## Web Basics (How does the internet work?)

저희가 항상 쓰는 인터넷, 뭔가 그냥 구름처럼 하늘에 둥둥 떠다니는 것 같지 않나요? 뭔가 엄청 복잡하고, 이해하기 힘든게 인터넷인것 같죠? 사실, 정말 별거 아닙니다. 

인터넷은, 하나의 **선**입니다.

![IMG_0088.JPG](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/18a5c2e3-4f3f-4d98-b3c7-fc5c848bce2c/IMG_0088.jpg)

이 선은 한 컴퓨터를 다른 컴퓨터와 연결 시켜주는 역활을 해주는데요, 예를 들어 서울에 있는 컴퓨터를 미국 뉴욕에 있는 컴퓨터와 연결해주는 역활을 해줍니다. 

![IMG_0086.JPG](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7c434374-21fb-4f75-a74b-e07676409bf5/IMG_0086.jpg)

이 선을 통해 두 컴퓨터는 데이터를 주고 받는데요, 여기서 서울에 있는 컴퓨터를 **클라이언트 (Client)**, 24시간 항상 켜져 있어 데이터를 보내주는 컴퓨터를 **서버 (Server)**라고 부릅니다.

![IMG_0087.JPG](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/524f43c4-84b9-43b0-8e51-7bdf051d89a5/IMG_0087.jpg)

아니 그럼, 이 선에 연결된 컴퓨터와 서버는 엄청나게 많을텐데 어떻게 데이터를 주고 받고 할 수 있나요? 

[https://s3-us-west-2.amazonaws.com/secure.notion-static.com/121dadb8-13ed-437b-a186-3651a57fcf58/untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/121dadb8-13ed-437b-a186-3651a57fcf58/untitled)

와, 뭔가 복잡하죠? 차근차근 설명해드리겠습니다.

여기서 중요한 친구들을 소개해 드릴께요. 바로 ISP와 DNS인데요,

**ISP (Internet Service Provider):** 인터넷 서비스 제공사업자로, 한국을 예로 들자면 KT, SK, LG U+가 있겠네요.

**DNS (Domain Name System):** 쉽게 얘기해서 전화번호부라고 생각해주세요. www.google.com과 같은 URL을 216.58.210.46와 같은 IP번호로 전환 시켜주는 역활을 해주고 있습니다.

자 그럼 설명 시작하겠습니다! 잘 따라와 주세요!

1. 컴퓨터에 www.google.com을 검색한다
2. 컴퓨터에서 DNS로 www.google.com의 IP주소를 달라고 요청을 한다
3. www.google.com을 IP주소인 [172.253.122.99](https://mxtoolbox.com/SuperTool.aspx?action=a%3agoogle.com&run=toolpage#)로 바꿔준다. (IP주소는 그 서버의 집주소라고 생각하면 편합니다)
4. IP 주소를 컴퓨터로 보내준다
5. 컴퓨터에서 ISP로 [172.253.122.99](https://mxtoolbox.com/SuperTool.aspx?action=a%3agoogle.com&run=toolpage#)을 찾아서 데이터를 보내달라고 요청한다.
6. [172.253.122.99](https://mxtoolbox.com/SuperTool.aspx?action=a%3agoogle.com&run=toolpage#)의 IP주소를  가진 서버로 요청이 간다.
7. 서버에서 ISP로 데이터를 보내준다
8. ISP가 내 컴퓨터로 데이터를 보내준다

저희가 www.google.com을 치면 구글 홈페이지가 나올때까지 얼마나 걸릴까요? 1초도 안걸립니다. 그 1초동안 저 많은 process가 진행이 되는 겁니다. 정말 놀랍지 않나요?

실습: [172.253.122.99](https://mxtoolbox.com/SuperTool.aspx?action=a%3agoogle.com&run=toolpage#)을 인터넷 창에 복사해서 찾아보세요! 뭐가 나올지 한번 맞춰보세요!

# 학습 자료집 1

# 오늘의 QNA

1. 타입스크립트가 너무 재밌어서 공부해보려고 하는 데 현업에서 많이 사용하는 언어인가요?
    1. 네. 많이 사용되고 있습니다 (유명한곳은 거진 다 쓴다고 보시면 됩니다)
2. 많이 사용한다면 어떤 것을 작성할때 많이 사용하나요?(react 라이브러리를 이용할 때 jsx대신 tsx를 쓴다던지 혹은 사내 API를 만들 때 사용한다던지 같은 경우)
    1. react에서도 많이 쓰이고 백엔드에서도 많이 쓰인다
    2. 그냥 js 쓰이면 ts 쓴다고 보면 된다
3. 코딩테스트 때문에 알고리즘 공부를 해야할 것 같은데 JS로 알고리즘을 공부해도 괜찮을까요?
    1. 예전에는 비추였지만 지금은 js를 코테용 언어로 많이 추가했기 때문에 괜찮을 것 같다
    2. 어차피 js는 계속 써야 하는 언어이기 때문에 새로운 언어를 배우는 것 보다 훨씬 더 좋다
    3. 다른 언어들은 빠른 실행 시간을 가지고 있다는 장점이 있지만, 코테에서 js로 코드를 작성했는데 실행시간이 오래 걸리면 그건 알고리즘 문제다
4. 알고리즘 공부를 어디서부터 손대야할지 모르겠는데 팁이 있다면 주실 수 있나요?
    1. 기본적인 알고리즘 유형을 학습하고 (bubble sort, insertion sort, avl tree 등등)
    2. 백준 주구장창 풀고
    3. 기업 코테 기출 풀고
    4. 사람들과 코드 비교해보면서 풀고

# 오늘의 코드 Report

### GAN을 만들었던 애플 머신러닝 디렉터, 사무실 출근 정책에 반발하여 퇴사

- 2014년 GAN(생성적 적대 신경망) 논문을 썼던 Ian Goodfellow
- Open AI 와 Google에서 일하다가 2019년 애플에 합류
- 애플의 사무실 출근 정책(5/2부터는 주2일, 5/23부터는 주3일 이상 근무)에 반발하여 퇴사 메일을 보냄

[Apple's Director of Machine Learning Resigns Due to Return to Office Work](https://www.macrumors.com/2022/05/07/apple-director-of-machine-learning-resigns/)

## 이제 패스워드가 없는 미래가 온다

- 애플, 구글, 마이크로소프트가 "Passkey" 표준으로 암호를 없애려는 "공동 노력"을 시작
- FIDO 및 W3C에서 만든 "암호 없는 로그인 표준"의 지원을 확대
- 사용하는 OS 플랫폼 이나 브라우저 상관없이 지원→ 새 장치를 포함, 많은 장치에서 모든 계정을 다시 등록할 필요없이 FIDO 로그인 자격증명(Passkey)에 자동으로 접근 가능→ 모바일 기기에서 FIDO인증을 사용해서 가까이에 있는 기기에서 앱/웹사이트 로그인 가능

[Apple, Google and Microsoft Commit to Expanded Support for FIDO Standard to Accelerate Availability of Passwordless Sign-Ins - FIDO Alliance](https://fidoalliance.org/apple-google-and-microsoft-commit-to-expanded-support-for-fido-standard-to-accelerate-availability-of-passwordless-sign-ins/)

## **최근 IT개발자 가장 열심히 뽑는 회사는 현대자동차라는데…**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c7d757b9-0c36-47c1-993b-04f49db088fd/Untitled.png)

[최근 IT개발자 가장 열심히 뽑는 회사는 현대자동차라는데...](https://www.chosun.com/economy/industry-company/2022/05/09/4HAIKQQC4BAVHC2X63YFNVN6AU/)

## 네카라는 옛말... 개발자가 뽑은 진짜 신의 작장은 몰두센

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/51f2f9ad-1fb3-43f2-abb1-761036ece77e/Untitled.png)

[네카라는 옛말...개발자가 뽑는 `진짜` 신의 직장은 `몰두센`](https://www.mk.co.kr/news/it/view/2022/04/349420/)

---

# 실습 1

## Module.exports와 exports의 관계

### exports

exports 방식으로 모듈을 선언하고 사용할 때 아래와 같이 사용된다

```jsx
const john = { name: "Daniel", intro: "Hi" }

exports.person = john;
```

위와 같이 export된 모듈은 아래와 같이 require를 이용하여 사용된다

```jsx
let user = require('파일경로');

console.log(user.person)
```

### module.exports

Module.exports를 이용하면 다음과 같다 (앞에 module이 붙는다)

```jsx
const john = { name: "Daniel", intro: "Hi" }

module.exports = john;
```

```jsx
let user = require('파일경로');

console.log(user)
```

두 방식의 차이점을 설명하자면:

- exports는 사용할 때 exports 객체에 프로퍼티를 추가하는 형식이고
- module.exports를 사용할 때 module.exports 변수에 새로운 객체를 할당하는 방식이다

```jsx
console.log(exports === module.exports);
console.log(module.exports);

// 결과값
true
{}
```

정말 간단한 핵심만 뽑아서 이야기하자면,

1. 여러개의 객체를 내보내야 한다면 exports 변수의 속성으로 할당을 하고
2. 만약 하나의 객체를 내보낼 경우 module.exports 변수 자체에 할당한다

결론:

- exports 객체는 module.exports 객체를 call by reference방식으로 참조하고 있다
- exports는 property 방식으로 사용한다
- module.exports는 바로 사용이 가능하다

## ES6를 이용한 모듈 내보내기 및 불러오기

<aside>
💡 ES6 import output은 현재 nodejs에서 공식지원이 되지 않으며, 아직 개발단계다

따라서 쓰려면 node를 실행할때 `--experimental-modules` 플래그를 붙여주거나 babel을 써야한다

</aside>

### import

```jsx
import A, { B, C } from 경로;  // A는 Default Export, B와 C는 Named Export

import { B as b, C as c } from 경로;  // 원하는 이름으로 로드

import * as obj from 경로;  // Export 된 모든 것들을 하나의 객체 형태로 로드 (불필요한 것도 가져오면 번들링 시 비효율을 야기)

import { default as A } from 경로;  // "import A from 경로"와 동일 (default : Default Export를 참조하는 용도로 사용하는 키워드)
```

### export

```jsx
//정해진 이름으로 내보내기

export 변수/함수/클래스 선언문;

export { 변수명/함수명/클래스명 };

export { 변수명/함수명/클래스명 as 다른 이름 };

//export default 사용 (이름을 정하지 않고 최대 하나만 가능)

export default 선언문 또는 값;

export { 변수명/함수명/클래스명 as default };
```

<aside>
💡 **Common.js와 ES6의 차이점**

Common.js는 ES6이전에 Node.js에서 모듈화를 하기 위해 채택된 라이브러리이다.

</aside>

## Hint

`app.js`

```jsx
//app.js
//1. exports를 import해서 변수 getSquare에 할당하세요.
const getSquare = //require를 사용하면 되겠죠?
console.log(getSquare.area(5));
console.log(getSquare.perimeter(5));

//2. module_exports를 import해서 변수 getSquare2에 할당하세요.
const getSquare2 = //require를 사용하면 되겠죠?
console.log(getSquare2.area(3));
console.log(getSquare2.perimeter(3));
```

`exports.js`

```jsx
// exports.js
exports.area = //width 제곱을 해주는 함수 작성
exports.perimeter = //width에 4를 곱하는 함수 작성
```

`module_exports.js`

```jsx
// square.js
module.exports = {
  area: //width 제곱을 해주는 함수 작성
  perimeter: //width에 4를 곱하는 함수 작성
}
```

## 실습 정답 코드

`app.js`

```jsx
//app.js
//1. exports를 import해서 변수 getSquare에 할당하세요.
const getSquare = require('./exports'); 
console.log(getSquare.area(5));
console.log(getSquare.perimeter(5));

//2. module_exports를 import해서 변수 getSquare2에 할당하세요.
const getSquare2 =  require('./module_exports'); 
console.log(getSquare2.area(3));
console.log(getSquare2.perimeter(3));\
```

`exports.js`

```jsx
// exports.js
exports.area = (width) => width * width;
exports.perimeter = (width) => 4 * width;
```

`square.js`

```jsx
// square.js
module.exports = {
  area: (width) => width * width,
  perimeter: (width) => 4 * width
}
```

---

# 실습 2

## fs 사용방법

### 모듈 불러오기

```jsx
const fs = require("fs");
```

### 파일 읽기 (비동기)

```jsx
fs.readFile("test.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
```

### 파일 읽기 (동기)

```jsx
try {
  const data = fs.readFileSync("test.txt", "utf8");
  console.log(data);
} catch (err) {
  console.log(err);
}
```

### 파일 쓰기 (비동기)

```jsx
const file = "test.txt";
const data = "테스트";
fs.writeFile(file, data, (err) => console.log(err));
```

### 파일 쓰기 (동기)

```jsx
try {
  const file = "test.txt";
  const data = "테스트";
  fs.writeFileSync(file, data);
} catch (err) {
  console.log(err);
}
```

## 실습 정답 코드

```jsx
//main.js

var fs = require("fs");

// 동기적 읽기
var text = fs.readFileSync("text.txt", "utf8");
console.log("동기적 읽기 " + text);

// 비동기적 읽기
fs.readFile("text.txt", "utf8", function (err, data) {
  console.log("비동기적 읽기 " + data);
});
```

---

# 실습 3

## Node.js 사용하기

필요한 http 모듈을 불러온다

```jsx
var http = require("http");
```

위에서 만든 http 인스턴스를 사용해서 http.createServer() 메서드를 실행, listen 메서드를 사용해서 포트 3000에 bind

```jsx
http.createServer(function(request, response){
    /* 
        HTTP 헤더 전송
        HTTP Status: 200 : OK
        Content Type: text/plain
    */
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    /*
        Response Body 를 "Hello World" 로 설정
    */
    response.write("Hello World\n");
		response.end()
}).listen(3000);
```

## Hint

```jsx
var http = require("http");

function onRequest(req, res) {
  //코드 작성
}

http.createServer(onRequest).listen(8080);
```

## 실습 정답 코드

```jsx
var http = require("http");

//1. 함수 `onRequest()` 인자에 request와 response를 넣어줍니다.
function onRequest(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });

  //2. html 본문(body)에 보여지는 부분을 입력하는 메서드인 res.write()를 사용해서 "Hello World"를 띄우세요.
  res.write("Hello World");

  //3. 응답을 종료하는 메서드인 res.end()를 작성하세요.
  res.end();
}

http.createServer(onRequest).listen(8080);
```

---

# 실습 4

## Node.js에서 html파일 내보내기

```jsx
var http = require("http");
//1. 파일 입출력을 위한 fs 모듈을 import하세요.
var fs = require("fs");

function onRequest(request, response) {
  //응답의 콘텐츠 형식이 HTML인 파일을 가져옵니다.

  response.writeHead(200, { "Content-Type": "text/html" });

  //2. 서버생성시 index.html 파일을 읽어오는 코드를 작성하세요.writeHead()를 사용합니다.

  //3. 이때 file read에 실패했을 경우 에러 메시지를 console에 띄우세요.
  //성공하면 index.html파일의 내용을 전달하세요.readFile 메소드 내애 함수를 생성해서 코드를 작성합니다.
  fs.readFile("./index.html", null, function (error, data) {
    if (error) {
      response.writeHead(404);
      response.write("File not found!");
    } else {
      response.write(data);
    }
    response.end();
  });
}

http.createServer(onRequest).listen(8080);
```

## 실습 정답 코드

```jsx
var http = require("http");
//1. 파일 입출력을 위한 fs 모듈을 import하세요.
var fs = null;

function onRequest(request, response) {
  //응답의 콘텐츠 형식이 HTML인 파일을 가져옵니다.
  response.writeHead(200, { "Content-Type": "text/html" });

  //2. 서버생성시 index.html 파일을 읽어오는 코드를 작성하세요.writeHead()를 사용합니다.

  //3. 이때 file read에 실패했을 경우 에러 메시지를 console에 띄우세요.
  //성공하면 index.html파일의 내용을 전달하세요.readFile 메소드 내애 함수를 생성해서 코드를 작성합니다.
}

http.createServer(onRequest).listen(8080);
```

---

# 실습 5

## 실습 정답 코드

```jsx
// 1. 지시사항에 나와있는 process 객체 정보를 console에 출력합니다.
console.log(process.version);       // node.js의 버전
console.log(process.arch);          // 프로세서의 아키텍처(arm/ia32/x64)
console.log(process.platform);      // 플랫폼(win32/linux/sunos/freebsd/darwin)

//argv는 프로세스를 실행할때 전달되는 파라미터 정보이며 배열 객체이므로 index를 사용하면 i번째 parameter 값을 확인할 수 있습니다. 여기서 forEach()를 사용해서 argv의 모든 속성값을 하나씩 출력할 수 있습니다.

process.argv.forEach(function(val, index, array) {
    // 2. process.argv명령 행 인수를 포함하는 배열의 요소를 콘솔에 출력하세요.
    console.log(index + ': ' + val);
});
```

---

# 보너스 실습

### Node.js + Express.js + dotenv를 활용한 간단한 html 서버 만들기

### Express 다운받기

```bash
npm i express
```

### dotenv 다운받기

```bash
npm i dotenv
```

### .env 파일 만들기

```jsx
PORT = 3000
```

### server.js 파일 만들기

```jsx
const express = require('express')
require('dotenv').config();
const app = express()

app.get('', (req, res) => {
	res.send('<h1>Hi Im Daniel!</h1>')
})

app.listen(3000, () => {
	console.log(`Server is running in ${process.env.PORT}`)
})
```

## 서버 켜보기

```bash
node server.js
```

## HTML 파일 렌더링 하기

### index.html 파일 만들기

```html
<html>
	<body>
		<h1>Hi!</h1>
	</body>
</html>
```

### sendFile를 이용해 html 파일 렌더링 해주기

```jsx
const express = require('express')
require('dotenv').config();
const app = express()

app.get('', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.listen(3000, () => {
	console.log(`Server is running in ${process.env.PORT}`)
})
```

### 기타 메모

- require 함수 실행시 자동으로 JSON 파싱이 됨