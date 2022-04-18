- 개발자도구 Source - Snippet 이용해보기.

- **체이닝기법**
    
    **한 객체에 다양한 메서드를 줄줄이 이어서 사용할 수 있다.**
    
    **즉 선택한 요소에 메서드를 연속적으로 사용할 수 있는데, 이를 마치 체인이 엮인 모양과 같다 하여 '체이닝 기법'이라 한다.**
    
    **jQuery에서는 한 객체에 다양한 메서드르 줄줄이 이어서 사용할수 있다.**
    
    **메서드 사용이 완료되었으면 문장 마지막에 세미콜론 ( ; )을 반드시 붙여주어야 한다.**
    
    ---
    
    **$(요소선택).css(속성1, 값1).css(속성2, 값2).css(속성3, 값3);**
    
    ---
    
    **$("#id").css("background-color","yellow").css("border","2px solid red");**
    

---

- 브라우저에 따라 모듈 import 가능여부를 판단 가능한 사이트
[https://caniuse.com/](https://caniuse.com/)

### export/import 사용하기

- 별도의 js 파일에서 외부에서만 사용할 함수를 정의할 때는 function 전에 export를 붙인다.
- 그렇지 않은 private한 함수는 붙이지 않는다.
- 가져올 때는`<script type="module">import {함수명} from './daynight.js';</script>`
    
    (type=”module”) 필수
    
- export default가 아닌 이상, export로 선언된 변수들은 중괄호 {}로 받아와야 하고, 변수명이 동일해야 한다.
- export default는 중괄호 없이도 받아올 수 있다.
- export 할 경우에는 import { 함수명 } from * 으로 사용하는데, export default 하실 경우에는 import 함수명 from * 으로 사용하게 됩니다.

### forEach문

`배열(리스트) 객체.forEach(함수)` 의 형태로 사용하며, 인덱스는 index라는 이름으로, 아이템은 어떠한 변수든 무방하다. 단지, item, index의 순서로 파라메터를 받는점을 주의한다. (index가 두번째로 온다)

```python
var fruits = ["apple", "orange", "cherry"];

function myFunction(item, index) {
  document.write(index + ":" + item + "<br>");
}

for (i = 0; i < 3; i++) {
  document.write(i);
  document.write(":" + fruits[i] + "<br>");
}
fruits.forEach((x, index) => {document.write( index + x + "<br>")})
```

### Map

```python
var numbers = [4, 9, 16, 25];

var result = numbers.map(Math.sqrt);
document.write(result);
```

- 자바스크립트는 주체가 되는 배열이 제일 먼저 함수 주체가 되고, 그 다음 실행할 함수 이름, 그리고 실행할 함수를 입력하는 순서가 되는 것 같다.(`배열.실행할 함수 명령어(대상 실행 함수))`

`numbers.map(Math.sqrt)`

### Reduce

```python
var numbers = [175, 50, 25];

document.write(numbers.reduce(myFunc));

function myFunc(total, num) {
  return total - num;
}

document.write(numbers.reduce((x, y) => x + y))
```