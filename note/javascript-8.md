### 생성 단계 → 실행 단계

- 생성 단계 : JS 엔진이 실행 컨텍스트를 생성하는데, 생성 단계에서 변수 선언을 읽는다.
- 실행 단계 : JS 엔진이 변수 값을 할당한다.

- 자바스크립트 엔진이 코드를 읽으면, 생성 단계에서 실행 컨텍스트를 생성한다.
- 이 때 함수 선언문은 실행단계에서 함수 전체가 실행 컨텍스트에 저장된다.
- var 변수는저장시 undefined로 초기화된다. let, const는 초기화되지 않는다.

### Hoisting (호이스팅 되다 라고 표현. let 변수는 호이스팅이 되지 않는다)

- Hoisting은 변수가 선언된 시점보다 앞에서 사용되는 현상이다.
- 이는 var 변수가 생성 단계에서 undefined로 초기화 되는 것이 원인이다.
- 함수는 생성 단계에서 함수 전체가 저장되므로 뒤에서 선언되어도 호출이 가능하다.

- let, const 변수는생성단계에서초기화되지않는다.
- 선언문이전에접근시ReferenceError가발생한다.
- 이경계를Temporal Dead Zone(TDZ)라한다.
- 따라서let, const는hoisting이발생하지않는다.

참고 : var은함수스코프, let과const는블록스코프변수이다.

예 ) 함수 실행시, 안에 for루프가 하나 있고 임의 변수 i가 있다고 가정해 보자.

- var = i로 선언했을 경우, var는 함수 스코프이기에 for루프 블럭이 끝나도 소멸하지 않는다.
- let = i로 선언했을 경우, for 루프 블럭이 끝나면 소멸하는데, 해당 함수의 closure에 저장된다.

### globalThis

- globalThis는브라우저환경에서window 객체와같다.

### createElement, createTextNode

- 동적으로원소를생성한다.
- 이를이용해자바스크립트만으로원소를구성할수있다.

```jsx
functioncreateTodoList(todos) {
returntodos.map((todo) => {
constli= document.createElement("li") 
li.appendChild(document.createTextNode(todo))
return li})
.reduce((ul, li) => {
ul.appendChild(li)
return ul
}, document.createElement("ul"))}
```

### Number, Nan

- 자바스크립트의number 원시타입을감싸는객체.
- 유의미한상수값, 숫자를변환하는메서드등을제공한다.
- NaN-Not a Number를나타내는객체.
- isNaN() -전역함수로, 입력값을숫자로변환했을때NaN이되는지를검사

```jsx
functionchangeToUsd(krw) {
const rate= 1046;
return(krw/ rate).toFixed(2);
}

constkrw= 1000000;
console.log(changeToUsd(krw));
```

- Number.toFixed메서드는숫자의소숫점자릿수를제어한다.
- 반환된값은반올림된문자열이다.
- changeToUsd에서변환된krw를소숫점둘째자리까지만처리하도록한다

```jsx
functionformatNumber(n) {
if (isNaN(n)) return'0';
return Number(n).toFixed(2);
}

formatNumber('12.345') // 12.35
```

- isNaN과함께활용하여, 유저의입력을포맷팅할수있다.
- formatNumber는isNaN함수로 빈문자열, 잘못된입력등의경우를처리한다.

### Math

- BigInt 타입과호환되지않고, Number 타입만을인자로다룬다.
- getRandomNumberInRange(min, max)함수는max, min 범위의랜덤숫자를 구한다.

### 렉시컬 환경

- 함수의 렉시컬환경은, 함수가 사용하는 변수들을 둘러싼 환경을 의미한다.
- 렉시컬 환경은 실행 컨텍스트 안에 정의된 Variable Object로 이해할 수 있다.

### 두 점 사이의 거리 (나중에 유용할 것 같다.)

```jsx
점 p1(x1, y1), p2(x2, y2)가 주어졌을 때 거리 d는 다음과 같이 구합니다.
d = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
```

### 현재 시간 구하기

```jsx
const Clock = {
  getCurrentTime: function (date) {
    // 현재 시간 문자열을 만들어 리턴하세요.
    // date가 Date 객체의 인스턴스가 아니라면 에러 메시지를 리턴하세요.
    if (Object.prototype.toString.call(date).slice(8, -1) !== 'Date' || !date) {
        return "현재 시간을 구할 수 없습니다.";    
    }
    return `현재 시간은 ${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분 ${date.getSeconds()}초 입니다.` 
  },
};

export default Clock;
```

- 위 코드는 내가 짠 코드지만, 비효율적인 한 부분을 아래와 같이 바꿀 수 있다.
    - before
    
    ```jsx
    Object.prototype.toString.call(date).slice(8, -1) !== 'Date'
    ```
    
    - to be
    
    ```jsx
    !(date instanceof Date)
    ```
    

### reduce accumulator ( 반영할 배열 또는 객체 등)에 사이 공백 넣는 방법

```jsx
const AlphabetCounter = {
  sentence: "",
  alphabetMap: {},

  setSentence: function (sentence) {
    this.sentence = sentence;
    return this;
  },

  buildAlphabetMap: function () {
    // this.sentence 로부터 알파벳 맵을 만들어
    // this.alphabetMap에 저장하세요.
    let a = this.sentence.trim().toLowerCase().split("").filter((x) => 'a' <= x && x <= 'z');
    this.alphabetMap = a.reduce((total, x)=> {
        if (!total[x]) {
            total[x] = 0;
        }
            total[x] ++;
            return total
        }
    , {});
    console.log(this.alphabetMap)
    return this;
  },

  buildResult: function () {
    // Object.entries()를 활용하여 [a: 1] [b: 2] 형태의 문자열을 만들어보세요.
     const resultString = Object.entries(this.alphabetMap).reduce((total, [k, v]) => 
        `${total} [${k}: ${v}]`, "").trim();
    return `결과는 : ${resultString} 입니다.`;
  },
};

export default AlphabetCounter;
```

```jsx
     const resultString = Object.entries(this.alphabetMap).reduce((total, [k, v]) => 
        `${total} [${k}: ${v}]`, "").trim();
```

- 위 코드에서 total이 `` 문자열 내에 있는것은 accumulator 역할을 하기 위해서이다.
- 만일 total을 배제하고 ` [${k}: ${v}]` 이렇게만 한다면 가장 끝 원소만을 반환하게 된다.
    
    ### difference
    
    - `${total} [${k}: ${v}]` : 전체 누적하여 합산
    - ` [${k}: ${v}]` : 전체 누적하지 않고 마지막 원소만 반환
    
    ### 결론
    
    → `` 문자열 내에 accumulator 역할을 하는 변수를 넣는다면 합산되고, 아니면 마지막 원소만 반환한다.
    

### 자바스크립트 객체 → JSON 변환