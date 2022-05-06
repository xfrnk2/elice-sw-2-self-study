 폴더 최상위에서 아래를 실행한다.

npm init —y

y는 수동으로 눌러야하는 y를 모두 yes를 적용시킨다.

package.json이 생성된다.

### 제네릭 연습

```jsx
function add<T>(a: T, b: T): T {
 if (typeof a === "boolean") {
    return a || b;
  }
  return <any>a + <any>b;
}

console.log(add<number>(13, 15));
console.log(add<string>("hell", "o"));
console.log(add<boolean>(false, true));
```

[조건]

1. generic T의 타입으로 number와 string, boolean만 가능하도록 제약조건을 추가하세요.
2. T가 number라면 두 수를 더한 값을 반환하세요.
3. T가 string이라면 두 문자열을 이어붙인 값을 반환하세요.
4. T가 boolean이라면 두 값을 or 연산을 한 값을 반환하세요.

## 학습 자료집1

- 목차

## 타입 선언

### 논리형(Boolean)

```tsx
let bool01: boolean = true;
let bool02: boolean = false;
```

### 숫자형(Number)

```tsx
let num01: number = 4;
let num02: number = 1.23;
let num03: number = NaN;
```

### 문자열(String)

템플릿 문자열도 지원한다.

```tsx
let str1: string = 'example';
let str2: string = `Hello, ${val}`;
```

### 배열(Array)

배열은 아래와 같이 두가지 방법으로 타입을 선언할 수 있다.

```tsx
// 문자열만 가지는 배열
let arr1: string[] = ['a', 'b', 'c'];
let arr2: Array<string> = ['a', 'b', 'c'];

// 숫자형만 가지는 배열
let arr3: number[] = [1, 2, 3];
let arr4: Array<number> = [1, 2, 3];

// Union 타입(다중 타입)의 문자열과 숫자를 동시에 가지는 배열
let arr5: (string | number)[] = [1, 'a', 2, 'b', 'c', 3];
let arr6: Array<string | number> = [1, 'a', 2, 'b', 'c', 3];

// 배열이 가지는 값의 타입을 추측할 수 없을 때 any를 사용할 수 있다.
let arr7: (any)[] = [1, 'a', 2, 'b', 'c', 3];
let arr8: Array<any> = [1, 'a', 2, 'b', 'c', 3];
```

### 함수(Function)

함수는 파라미터에 각각 타입을 선언해 주며, 파라미터 우측에는 해당 함수의 리턴값 타입도 선언해 주면 된다.

```tsx
function sum(a: number, b: number): number {
  return a + b;
}
console.log(sum(2, 3)); // 5
```

리턴값을 숫자형으로 선언하였는데 다른 값이 리턴된다면 에러가 난다.

```tsx
function sum(a: number, b: number): number {
  return "hello"; // error
}
```

### 객체(Object)

기본적으로 typeof 연산자가 `object`로 반환하는 모든 타입을 나타낸다. 여러 타입의 상위 타입이기 때문에 그다지 유용하지 않다.

```tsx
let obj: object = {};
let arr: object = [];
let func: object = function() {};
let date: object = new Date();
```

보다 정확하게 타입 지정을 하기 위해 아래와 같이 객체 속성들에 대한 타입을 개별적으로 지정할 수 있다.

```tsx
let user: { name: string, age: number } = {
  name: 'a',
  age: 20
};
console.log(user); // {name: "a", age: 20}
```

### 튜플(Tuple)

배열과 유사하다. 차이점은 정해진 타입의 요소 개수 만큼의 타입을 미리 선언후 배열을 표현한다.

```tsx
let tuple: [string, number];
tuple = ['a', 0];
console.log(tuple); // ["a", 0]
```

정해진 요소의 순서 및 개수가 다르면 오류를 출력한다.

```tsx
let tuple: [string, number];
tuple = [0, 'a']; // error
tuple = ['a', 0, 1]; // error
```

값으로 타입을 대신할 수도 있다. 처음 선언할 때의 값과 다른 값이 할당 되면 에러가 출력된다.

```tsx
let user: ['a', number];
user = ['a', 20]; // ["a", 20]
user = ['a', 30]; // ["a", 30]
user = ['b', 30]; // error
```

튜플은 정해진 타입과 고정된 길이의 배열이지만, 값을 할당할 때만 해당된다. push나 splice같은 메소드를 통해 값을 넣는건 막을 수 없다.

```tsx
let user: [string, number];
user = ['a', 20]
console.log(user); // ["a", 20]
user.push(30);
console.log(user); // ["a", 20, 30]
```

### 열거형(Enum)

숫자 혹은 문자열 값 집합에 이름을 부여할 수 있는 타입으로, 값의 종류가 일정한 범위로 정해져 있는 경우 유용하다. 기본적으로 0부터 시작하며, 값은 1씩 증가한다.

```tsx
enum obj {
  a,
  b,
  c,
  d,
  e
}
console.log(obj);
// 0: "a"
// 1: "b"
// 2: "c"
// 3: "d"
// 4: "e"
// a: 0
// b: 1
// c: 2
// d: 3
// e: 4
```

수동으로 값을 변경할 수 있으며, 변경한 부분부터 다시 1씩 증가한다.

```tsx
enum obj {
  a,
  b = 10,
  c,
  d,
  e
}
console.log(obj.b); // 10
console.log(obj.c); // 11
```

### 모든 타입(Any)

Any는 모든 타입을 의미하며, 기존의 자바스크립트 변수와 마찬가지로 어떠한 타입의 값도 할당할 수 있다. 불가피하게 타입을 선언할 수 없는 경우, 유용할 수 있다.

```tsx
let any:any = 'String';
any = 0;
console.log(any); // 0
any = true;
console.log(any); // true
```

### 빈 타입(Void)

빈 타입인 Void는 리턴값이 없는 함수에서 사용된다. 리턴값의 타입을 명시하는 곳에 작성하며, 리턴값이 없는 함수는 `undefined`를 반환한다.

```tsx
function hello(): void {
  console.log("hello");
}
console.log(hello()); // undefined
```

### never

Never 타입은 절대 발생할 수 없는 타입을 나타낸다.

```tsx
// never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function error(message: string): never {
    throw new Error(message);
}
```

`error` 함수는 오류를 발생시키기 때문에 `null`, `undefined`를 포함한 어떠한 값도 반환하지 않는다. 이럴 경우 never 타입을 사용하면 된다.

출처: [https://velog.io/@recordboy/타입스크립트TypeScript-타입-선언](https://velog.io/@recordboy/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8TypeScript-%ED%83%80%EC%9E%85-%EC%84%A0%EC%96%B8)

# 실습 1 (TS Basics)

---

## Hint

```jsx
function addTwo(a: number, b: number): number {
    return a + b;
}

function addOneOrTwo(a는 숫자, b는 숫잔데 있어도 되고 없어도 된다): number {
	만약 b가 있으면
		a + b
	만약 없으면
		a    
}

function addDefault(a는 숫자, b는 기본으로 10이라는 숫자 값을 가짐): number {
		a + b;
}

function addTwoOrMore(a: number, b: number, ...c: number[]): number {
	만약c 가 있다면
		for문을 돌려서 a에 모두 더해라
	a + b
}
```

## 실습 정답 코드

```jsx
function addTwo(a: number, b: number): number {
    return a + b;
}
// error
// console.log(addTwo(2))
console.log(addTwo(2, 3))

function addOneOrTwo(a: number, b?: number): number {
    if(b)
        return a + b;
    else
        return a;
}
// error
// console.log(addOneOrTwo(5, 10, 15))
// console.log(addOneOrTwo())
console.log(addOneOrTwo(5, 10))
console.log(addOneOrTwo(10))

function addDefault(a: number, b: number = 10): number {
    return a + b;
}
console.log(addDefault(3)) // return 13
console.log(addDefault(12, 15))

function addTwoOrMore(a: number, b: number, ...c: number[]): number {
    if(c) {
        for(let i: number = 0; i < c.length; i++)
            a += c[i];
    }
    return a + b;
}
// error
// console.log(addTwoOrMore(10))
console.log(addTwoOrMore(2, 1))
console.log(addTwoOrMore(8, 8, 6, 1, 9, 6))
```

---

# 실습 2 (class)

## 타입스크립트 객체

```tsx
class Cat {
	name: string
	
	constructor(name: string) {
		this.name = name;
	}
}
```

## 실습 정답 코드

```tsx
class Dog {
    name: string;
    species: string;
   
    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }
    
    bark() {
        console.log(`${this.name}(${this.species}) : BOWWOW!`);
    }
}

const daisy: Dog = new Dog('Daisy', 'Bulldog');
daisy.bark();
```

---

# 실습 3 (class)

## class 상속

- 한 클래스가 다른 클래스에서 정의된 속성(자료,함수)를 이어받아 그대로 사용
- 이미 정의된 클래스를 바탕으로 필요한 기능을 추가하여 정의

## 상속을 왜 하나요?

- 상속을 통하여 기존 클래스의 속성(자료,함수) 재사용
- 기존 클래스의 일부 변경도 가능
- 상속을 이용하게 되면 복잡한 GUI 프로그램을 순식간에 작성
- 상속은 이미 작성된 검증된 소프트웨어를 재사용
- 신뢰성 있는 소프트웨어를 손쉽게 개발, 유지 보수
- 코드의 중복 감소

## super 키워드

- super 키워드는 자식 클래스가 **부모 클래스를 참조하거나, 부모 클래스의 constructor() 를 호출**할 때 사용된다.
- super 키워드를 통해, 부모의 속성 필드를 삭제할 수 없다.
- super.prop 를 통해 non-writable인 속성을 덮어쓸 수 없다.
- 자식클래스의 생성자에 필수적으로 super()을 먼저 호출해야 한다. 이전엔, this를 사용할 수 없다.

```tsx
// Base Class*
class Vehicle{
    constructor(){
        console.log("Vehicle constructor");
    }
}

// Sub class
class Car extends Vehicle{
    constructor(){
				// console.log(this);  // error! super() 를 먼저 호출해야한다.
				super();
        console.log("Car constructor");
        console.log(this);
    }
}

let car = new Car();
// "Car constructor"
// Car {}
```

## Hint

```tsx
class Puppy extends Dog {
    constructor(이름(문자열), 종(문자열)) {
				//super를 이용해 name과 species를 참조하는데, species에는 '-baby'를 더한다
    }
    
    bark() {
        console.log(`${this.name}(${this.species}) : bowwow!`);
    }
}
```

## 실습 정답 코드

```tsx
class Dog {
    name: string;
    species: string;
    
    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }
    
    bark() {
        console.log(`${this.name}(${this.species}) : BOWWOW!`);
    }
}

class Puppy extends Dog {
    constructor(name: string, species: string) {
        super(name, species+'-baby');
    }
    
    bark() {
        console.log(`${this.name}(${this.species}) : bowwow!`);
    }
}

const daisy: Dog = new Dog('Daisy', 'Bulldog');
daisy.bark();

const tom: Puppy = new Puppy('Tom', 'Bulldog');
tom.bark();
```

---

# 실습 4 (abstract)

## 추상 클래스란?

하나 이상의 추상 메소드를 포함하는 클래스를 가리켜 추상 클래스(abstract class)라고 합니다.

앞에 `abstact` 키워드가 붙습니다.

## 추상 메서드란?

추상 메소드(abstract method)란 자식 클래스에서 반드시 오버라이딩해야만 사용할 수 있는 메소드를 의미합니다. 자식 클래스에 다시 메서드를 선언해주면 됩니다.

앞에 `abstact` 키워드가 붙습니다.

## Hint

```tsx
class Dog extends Animal {
    constructor(이름(문자열), 종(문자열)) {
				//super를 이용해 name과 species를 참조하는데, species 앞에는 'Dog-'를 더한다
    }
    
    //bark 메서드 구현
}
```

## 실습 정답 코드

```tsx
abstract class Animal {
    name: string;

    species: string;
    
    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }
    
    abstract bark() : void;
}

class Dog extends Animal {
    constructor(name: string, species: string) {
        super(name, `Dog-${species}`);

    }
    
    bark() {
        console.log(`${this.name}(${this.species}) : BOWWOW!`);
    }
}

class Cat extends Animal {
    constructor(name: string, species: string) {
        super(name, `Cat-${species}`);

    }
    
    bark() {
        console.log(`${this.name}(${this.species}) : meow!`);
    }
}

const daisy: Dog = new Dog('Daisy', 'Bulldog');
daisy.bark();

const cheese: Cat = new Cat('Cheese', 'Bengal');
cheese.bark();
```

---

# 실습 5

## Interface

인터페이스는 일반적으로 **타입 체크를 위해 사용되며 변수, 함수, 클래스에 사용**할 수 있다. 인터페이스는 여러가지 타입을 갖는 프로퍼티로 이루어진 새로운 타입을 정의하는 것과 유사하다. 인터페이스에 선언된 프로퍼티 또는 메소드의 구현을 강제하여 일관성을 유지할 수 있도록 하는 것이다.

### 변수

```tsx
// 인터페이스의 정의
interface Car {
  id: number;
  engine: string;
  completed: boolean;
}

// 변수 Genesis의 타입으로 Car 인터페이스를 선언하였다.
let Genesis: Car;

// 변수 Genesis는 Car 인터페이스를 준수하여야 한다.
Genesis = { id: 1, engine: '3.5L V6', completed: false };
```

### 함수

```tsx
// 함수 인터페이스의 정의
interface returnNumber {
  (num: number): number;
}

// 함수 인테페이스를 구현하는 함수는 인터페이스를 준수하여야 한다.
const squareFunc: SquareFunc = function (num: number) {
  return num * num;
}

console.log(squareFunc(10)); // 100
```

### 클래스

```tsx
// 인터페이스의 정의
interface Car {
  id: number;
  engine: string;
  completed: boolean;
}

// Todo 클래스는 ITodo 인터페이스를 구현하여야 한다.
class Todo implements ITodo {
  constructor (
    public id: number,
    public engine: string,
    public completed: boolean
  ) {}
}

const todo = new Todo(1, '3.5L V6', false);

console.log(todo);
```

## Hint

```tsx
class triangle implements triangleInterface {
	//너비: 숫자
	//높이: 숫자

	//생성자(a,b <- 둘다 숫자) {
		//너비 = a
		//높이 = b
	
	//넓이를 구하는 메서드 (숫자 반환)
		//너비 * 높이 /2
}

class circle implements circleInterface {
	//반지름 -> 숫자
	
	//생성자(r <-숫자) {
		//반지름 = r

	//넓이를 구하는 메서드 (숫자 반환)
		//반지름 * 반지름 * pi (Math.PI) 이용
}
```

## 실습 정답 코드

```tsx
interface shapeInterface {
  getArea(): number;
}

interface triangleInterface extends shapeInterface {
  width: number;
  height: number;
}

interface circleInterface extends shapeInterface {
  radius: number;
}

class triangle implements triangleInterface {
  width: number;

  height: number;

  constructor(a: number, b: number) {
    this.width = a;
    this.height = b;
  }

  getArea(): number {
    return (this.width * this.height) / 2;
  }
}

class circle implements circleInterface {
  radius: number;

  constructor(r: number) {
    this.radius = r;
  }

  getArea(): number {
    return this.radius * this.radius * Math.PI;
  }
}

const tri = new triangle(10, 5);
const cir = new circle(4);

console.log(tri.getArea());
console.log(cir.getArea());
```

---

# 실습 6

## Generic 함수란?

선언 시점이 아니라 생성 시점에 타입을 명시하여 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법

```tsx
function testFunction <T>(arg: T):T {
	return arg;
}

//만약 매개변수의 타입이 다르다면?
function testMultipleFunction <T, U>(x: T, y: U): [T,U] {
	return x,y;
}
```

## Hint

```tsx
generic 함수 선언
	만약 a가 boolean이라면
		a 또는 b 반환
	
	a + b 반환

  return <any>a + <any>b;
}
```

## 실습 정답 코드