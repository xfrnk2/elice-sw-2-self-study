### 1급 객체

Javascript에서 함수는 아래 3 가지조건을 충족하니 1급 객체라고 할수 있다.

1. 함수를 변수나 데이타에 할당 할 수 있다. (변수 할당)
2. 함수를 인자로 전달 할 수 있다. (인자 전달)
3. 함수를 리턴 할수 있다. (리턴)

reference: [https://en.wikipedia.org/wiki/First-class_citizen](https://en.wikipedia.org/wiki/First-class_citizen)

[http://ryanchristiani.com/functions-as-first-class-citizens-in-javascript/](http://ryanchristiani.com/functions-as-first-class-citizens-in-javascript/)
[https://soeunlee.medium.com/javascript에서-왜-함수가-1급-객체일까요-cc6bd2a9ecac](https://soeunlee.medium.com/javascript%EC%97%90%EC%84%9C-%EC%99%9C-%ED%95%A8%EC%88%98%EA%B0%80-1%EA%B8%89-%EA%B0%9D%EC%B2%B4%EC%9D%BC%EA%B9%8C%EC%9A%94-cc6bd2a9ecac)

### 동적 바인딩 - Bind 함수 // 함수를 다시 정의 한다

- this는 자바스크립트에서 조금 골치아픈 존재이다. 
그리고 경우에 따라서 this는 획획 바뀔 수 있다.
그렇기 때문에 this를 고정시키는 방법이 존재한다.
이를 this바인딩이라고 한다.

```jsx
function sum(num) {
    return num + this.num1 + this.num2;
}

var myObj = {num1:20, num2: 3};

var customSum = sum.bind(myObj);

console.log(customSum(5));
```

- 어떠한 함수이건(그게 메소드라 할지라도) bind라는 함수를 사용할 수 있다.
    
    즉 function object는 모두 bind를 사용할 수 있다는 것이다.
    
    **bind함수를 사용하면 this는 내가 정한 object로 고정된다.**
    
    그전에 만약 bind가 되있다면 그 bind를 무시하고 object를 고정하게 된다.
    
    따라서 위는 어떠한 환경이던 this는 myObj가 되므로 확정된 결과를 보여줄 수 있게 된다.
    

### 동적 바인딩 - call, apply 함수 // 인자를 가지고 함수를 호출한다


```jsx
someFunction.call(obj, "param1")
someFunction.apply(obj, ["param1", "param2"])
```

- `call`과 `apply`는 함수를 호출하는 함수이다. 그러나 그냥 실행하는 것이 아니라 첫 번째 인자에 `this`로 setting하고 싶은 객체를 넘겨주어 `this`를 바꾸고나서 실행한다.
- call과 apply의 유일한 차이점은, 첫 번째 인자(this를 대체할 값)를 제외하고, 실제 someFunction에 필요한 parameter를 입력하는 방식이다. call과는 다르게 apply함수는 두 번째 인자부터 모두 배열에 넣어야 한다.

### Rest Operator 2

```
function findMinInObject(o) {  
  return Math.min( 
...Object.values(o)    )}

let o1 = { a: 1 }
let o2 = { b: 3 }
let o3 = { c: 7 }

findMinInObject(    
mergeObjects(o1, o2, o3))// 1
```

- mergeObjects는 주어진 객체들의 필드를 합친다.
- findMinInObject에서는 객체의 필드들 중 최솟값을 반환한다.
- Object.values는 객체 값들의 배열을 반환한다.
- 배열 전개 연산자로 Math.min의 인자를 넘긴다.

### Rest Operator & Spread Operator

### spread operator(펼침연산자)

```jsx
const arr = [1, 2, 3, 4];

console.log(arr);	//[1,2,3,4]
console.log(...arr); //1,2,3,4
console.log([...arr]); // [1,2,3,4]
```

spread 연산자를 사용하면 배열이 아니라 **개별 요소**로 결과값이 나온다.

[...spread operator]의 형태로 쓴다면 결과는 배열이 된다.

### rest parameter(나머지 매개변수)

```jsx
function restParam(param1, param2, ...rest) {
	console.log(param1); //1
	console.log(param2); //2
	console.log(rest); //[3,4,5,"rest!";]
}
restParam(1, 2, 3, 4, 5, 'rest!');
```

파라미터에 ...를 사용하면 함수에 전달된 인수를 **배열로 묶어서** 나타낼 수 있게 한다.

함수의 매개변수 개수가 함수 객체의 length에 영향을 주지 않는다.

### 문자열 rotation number만큼 아스키 코드값을 변경시켜서 암호화하기

```jsx
const RotationEncryptor = {
  message: "",
  rotation: 0,

  encrypt: function () {
    // this.message의 각 문자 character code에 rotation 값을 더해 새로운 문자열을 만들어 반환합니다.
    // ex) message - "abcde", rotation - 1 => "bcdef"
    
    return this.message.split('').map((c) => String.fromCharCode(c.charCodeAt(0) + this.rotation)).join('');
  },
```

- “문자열”.charCodeAt(인덱스) 함수와, String.fromCharCode를 이용한다.

### spread operator를 활용하여 배열에 CRUD 적용하기

```jsx
function ArrayManipulator(array) {
  function addElement(element) {
    // 예시 코드입니다.
    // 변환된 배열을 `ArrayManipulator`의 인자로 넘겨 리턴합니다.
    return ArrayManipulator([...array, element]);
  }

  function removeElement(index) {
    // 인자를 제거한 배열을 만들어주세요.
    
    return ArrayManipulator([
    ...array.slice(0, index),
    ...array.splice(index+1)
    ]);
  }

  function updateElement(index, element) {
    // 인자를 갱신한 배열을 만들어주세요.
    return ArrayManipulator([
    ...array.slice(0, index),
    element,
    ...array.slice(index+1)
    ]);
  }

  function mapElements(func) {
    // 배열 전체를 변환하세요.
    // Array 객체의 내장 map 함수를 활용해 보세요.
    return ArrayManipulator(array.map(func));
  }

  function filterElements(func) {
    // 배열의 특정 원소를 필터하세요.
    // Array 객체의 내장 filter 함수를 활용해 보세요.
    return ArrayManipulator(array.filter(func));
  }

  function getArray() {
    return array;
  }

  return {
    addElement,
    removeElement,
    updateElement,
    mapElements,
    filterElements,
    getArray,
  };
}

export default ArrayManipulator;
```

### Form 구현하기

```jsx
const Form = () => {
  const formState = {};

  function register(name, validator = (value) => true) {
    // register시, state에 필드를 등록합니다.
    // 필드 등록 객체는 { value, validator } 입니다.
    // value는 빈 문자열로 초기화됩니다.
    formState[name] = {value: "", validator };
  }

  function validate() {
    // state의 전체 필드를 검사합니다.
    // validator(value) 로 value가 유효한지 검사할 수 있습니다.
    // 전체 필드가 유효해야만 폼이 유효합니다.
    return Object
        .values(formState)
        .reduce((flag, {value, validator}) => validator(value) && flag , true )
    
  }

  function getFormData() {
    // state의 각 필드에 있는 value를 모아 하나의 객체로 리턴합니다.
    // { name : 'Kim', age: 30 } 의 형식으로 리턴해야 합니다.
    return Object
        .entries(formState)
        .reduce((formData, item) => {
            const [ key, {value, validator}] = item
            formData[key] = value
            return formData
        }, {})

  }

  function setValue(name, value) {
    // name으로 찾은 필드의 value를 설정합니다.
    // name에 해당하는 상태는 반드시 있다고 가정합니다.
    formState[name] = {...formState[name], value};
  }

  return {
    register,
    validate,
    getFormData,
    setValue,
  };
};

export default Form;
```

### 기타 - 체이닝

```jsx
// 3. filter(), sort()를 사용해 인구가 천만 미만인 도시를 인구가 적은 순서대로 반환하세요.
let smallCities = cities.filter((city) => city.population < 10000000).sort((c1, c2) => c1.population - c2.population);
console.log(smallCities);
```

### 기타 - reduce

```jsx
//1. reduce()를 사용해서 구입할 제품의 총금액을 반환하는 함수를 작성해서 console.log로 출력하세요.
const total = shoppingCart.reduce((amount, element) => {
    return amount += element.price * element.qty;
}, 0)
```

### REFFERENCE

- [https://kamang-it.tistory.com/entry/JavaScript07this-this바인드편bindcallapply](https://kamang-it.tistory.com/entry/JavaScript07this-this%EB%B0%94%EC%9D%B8%EB%93%9C%ED%8E%B8bindcallapply)
- [https://wooooooak.github.io/javascript/2018/12/08/call,apply,bind/](https://wooooooak.github.io/javascript/2018/12/08/call,apply,bind/)