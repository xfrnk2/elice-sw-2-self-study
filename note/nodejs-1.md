### 비동기 동작의 완료를 처리하는 방법

비동기 방식은 특정 동작을 실행한 후, 해당 동작을 전혀 신경쓰지 않음.

대신 해당 동작이 완료될 경우 실행할 함수를 미리 등록함.

비동기 동작이 완료가 되면 미리 등록된 함수를 실행

### 요약

싱글쓰레드이기때문에비동기동작필요

비동기동작을구현하기위해이벤트기반

### Node.js 는 서버뿐 아니라 모든 영역을 지원하는 런타임입니다.

### LTS : Long-Term Support

### 콜백 함수

```jsx
db.getUsers((err, users) =>{
console.log(users);
});
```

쿼리가완료되면 오류가있는지,혹은 유저목록의 결과로 미리등록된 callback 함수를실행

callback의 표준 에러와 결과를 같이 전달하는 것이 표준으로 자리잡혀 있음

### 콜백함수란?

- 이름 그대로 나중에 호출되는 함수 (즉시 실행도 가능하고, 나중에 실행도 가능)
1. 다른 ***함수***의 인자로써 이용되는 ***함수***
2. 어떤 이벤트에 의해 호출되어지는 ***함수***

### Promise

- Promise 함수는동작이완료되면then에등록된callback 실행.
- 오류가발생한경우catch에등록된callback실행.
- Chaining을사용해코드를간결하게
- Short-hand표현방법으로더욱간결하게
    1. Return생략가능
    2. 인자가하나인경우() 생략가능

### Async-Await

```jsx
asyncfunction doSomething() =>{
cosntr1=awaitpromise1();
constr2 = awaitpromise2(r1);
constr3 = awaitpromise3(r1, r2);
...
return r3;});

doSomething().then(r3 =>{
console.log(r3)});
```

- async-await은promise의다른문법
- async 함수내에서 promise 함수의결과는await 으로받을수있음.
- **await한 promise 함수가 완료될때까지 다음라인으로넘어가지않음.**
- 순차적프로그래밍처럼작성가능.
- async 함수의 return 은Promise

![Untitled (91)](https://user-images.githubusercontent.com/34790699/166475401-513a29e4-7218-4b0c-802b-c4caa29bad70.png)

- **Promise.all**은 promise 함수를 동시에 실행시키고 등록된 모든함수가 마무리되면 결과값을 한꺼번에반환.

![Untitled (92)](https://user-images.githubusercontent.com/34790699/166475405-8c076b8f-abe7-4eda-b02d-17edb5b054fd.png)

### 문제 해결

- callback 지옥-> promise chaining으로해결
- promise 지옥-> async -await으로해결
- 현대JavaScript에서는 대부분 가독성이 좋은 async -await을 지향하지만, 특정 상황에 맞는 비동기 코딩 방법들을 구사할 줄 알아야 함

![Untitled (93)](https://user-images.githubusercontent.com/34790699/166475407-4ac7909a-6c6a-44c5-a02b-ec7ba243fb3d.png)


- 이벤트루프는 비동기 동작의 실행 타이밍을 이해하는 것이 중요
- Message Queue는 콜스택이 비어있을 경우 등록된 함수를 콜스택에 추가
- Job Queue는 콜스택이 비어있지 않더라도 상위 함수가 종료되기 전에 콜백을 콜스택에 추가
- setTimeout은콜스택이비어있을때실행됨
- Promise 는상위함수가종료되기전에실행됨

### 모듈 사용 - require와 export 사용하기

방법 2가지

```jsx
//calc.js는 exports에 직접 프로퍼티를 할당합니다.
//사칙연산에 해당하는 함수 4개를 작성해서 exports에 할당하세요.

exports.add = function(a, b){  return a + b; }
exports.multiply = function(a, b){  return a * b; }
exports.subtract = function(a, b){  return a - b; }
exports.divide = function(a, b){  return a / b; }
```

```jsx
//calc2.js는 새로운 객체에 프로퍼티를 설정 후 module.exports라는 하나의 값에 할당합니다.

//1. calc 라는 객체를 생성하세요.
const calc = {}
//2. calc객체에 사칙연산에 해당하는 프로퍼티를 모두 추가하세요.

calc.add = function(a, b){  return a + b; }
calc.multiply = function(a, b){  return a * b; }
calc.subtract = function(a, b){  return a - b; }
calc.divide = function(a, b){  return a / b; }

//3. module.exports 에 calc 객체를 할당하세요.

module.exports = calc;
```

### node js 파일 읽기 방식

readFileSync: 동기

readFile :비동기 (파일, 인코딩타입, 콜백함수)

```jsx
const fs = require('fs');
const data = fs.readFileSync('poetry.txt','utf-8');
console.log(data);
```

```jsx
const fs = require('fs');
fs.readFile('poetry.txt','utf-8',(err,data)=>{
    if (err) return console.log(err);
    console.log(data);
})
```

```jsx
// fs 모듈을 불러오세요.
var http = require("http");
var fs = require("fs");

// 서버를 생성하세요.
// fs 모듈의 readFileSync() 함수를 이용해 파일을 읽고, 화면에 출력해보세요.
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });

    var data = fs
      .readFileSync("poetry.txt", "utf-8")
      .split("\n");
    for (var i = 0; i < data.length; i++) {
      res.write(data[i]);
      res.write("<br />");
    }

    res.end();
  })
  .listen(8080);
```

### 기타

```jsx
// 생성한 모듈을 불러오세요.
var http = require("http");
var coffee = require("./cafe");

// 서버를 생성하세요.
// 생성한 모듈에 "americano"를 인수로 넘겨 호출하여 화면에 "Make an americano"가 출력되도록 작성하세요.
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(coffee.cafe("americano"));
    res.end();
  })
  .listen(8080);
```

```jsx
// 입력된 문자열의 첫번째 인자가 모음으로 시작하면 true, 아니면 false를 반환하는 함수입니다.
function startsWithVowel(word) {
  var vowels = "aeiou";
  return vowels.indexOf(word[0]) !== -1;
}

// "Make a(n) '메뉴 이름'" 문자열을 반환하는 함수를 export하세요.
// 메뉴 이름이 a, e, i, o, u로 시작하면 "Make an '메뉴이름'", 그렇지 않으면 "Make a '메뉴이름'"을 반환합니다.
exports.cafe = function (menu) {
  var article = startsWithVowel(menu) ? "an" : "a";

  return `Make ${article} ${menu}`;
};
```