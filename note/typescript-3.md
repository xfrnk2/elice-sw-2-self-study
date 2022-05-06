### class의 interface 상속 예제

1. **`CardPaymentStrategy`** 와**`CashPaymentStrategy`**를 **`PaymentStrategy`** implements 시켜서 클래스를 구현해 주세요.
2. **`vendingMachine.pay()`**를 호출 했을 때, **`cash pay`**, **`card pay`**가 각각 콘솔화면에 나올 수 있도록 구현해 주세요.

```jsx
interface PaymentStrategy {
  pay(): void
}

class CashPaymentStrategy implements PaymentStrategy {
    pay() {
        console.log("cash pay")
    }
}

class CardPaymentStrategy implements PaymentStrategy {
    pay() {
        console.log("card pay")
    }
}

// PaymentStrategy를 상속받는 두 개의 클래스를 구현해주세요.
// 각 클래스의 `pay()` 메소드를 호출했을 때 cash pay, card pay가 출력되어야 합니다.

class VendingMachine {
  private paymentStrategy: PaymentStrategy

  setPaymentStrategy(paymentStrategy: PaymentStrategy) {
    this.paymentStrategy = paymentStrategy
  }

  pay() {
    this.paymentStrategy.pay()
  }
}

const vendingMachine = new VendingMachine()

vendingMachine.setPaymentStrategy(new CashPaymentStrategy())
vendingMachine.pay() // cash pay

vendingMachine.setPaymentStrategy(new CardPaymentStrategy())
vendingMachine.pay() // card pay
```

## **Interface**

### **1. Interface란?**

인터페이스(Interface)란 코드 내 계약(약속, 규칙)을 정의하는 강력한 방법입니다. 인터페이스는 일반적으로 변수, 함수, 클래스의 타입을 체크하기 위해 사용됩니다. 예를 들면 아래 **`elice`** 변수는 **`Person`** 인터페이스의 계약을 준수해야만 합니다.

```
interface Person {
  name: string,
  age: number
}

let elice: Person = {name: "rabbit", age: 13};

```

앞서 살펴보았던 타입을 정의하는 type alias에 대해 기억하시나요?

```
type Human = {
  name: string;
  age: number;
};

```

type alias는 인터페이스와 비슷한 역할을 하지만, type alias는 확장(**`extends`**)가 불가능하고 인터페이스는 확장이 가능합니다. 따라서 웬만하면 인터페이스를 사용하는 것이 좋습니다. 인터페이스의 확장에 대해서는 뒤에서 학습할 예정입니다.

인터페이스는 객체나 함수의 스펙, 배열의 접근 방식, 클래스 같은 범주에 대해 계약을 정의할 수 있습니다. 예를 들어 아래와 같은 인터페이스가 있다고 가정할 때 각각의 인터페이스 사용 예시를 살펴보세요.

```
interface Person {
    name: string
}

```

- 변수
    
    ```
    let elice: Person = {name: "rabbit"};
    
    ```
    
- 함수
    
    ```
    function greeting(person: Person): void {
        console.log(`Hello ${person.name}`);
    }
    
    ```
    
- 클래스
    
    ```
    class Member implements Person {
        constructor (
            public name: string
        ) { }
    }
    
    ```
    
- 배열의 경우 아래와 같이 인터페이스를 이용할 수 있습니다.
    
    ```
    interface Person {
        [index: number]: string;
    }
    let people: Person = ["rabbit", "cheshire", "queen"];
    
    ```
    

> 추상 클래스 vs 인터페이스추상 클래스는 일반 클래스와 달리 추상 메소드가 포함된 클래스로 일반 메소드를 포함할 수 있습니다. 반면 인터페이스는 모든 메소드가 추상 메소드여야 하는 차이가 있습니다.추상 클래스는 상속을 통해 추상 메소드의 구현을 강제하여 자식 클래스에서 일부 동작을 구현하도록 만든 것입니다. 인터페이스는 모든 구현에 대한 계약을 작성해둔 것입니다. 추상 클래스는 프로그램의 전체 구조를 잡기 위해 사용하고, 인터페이스는 기본적인 설계도로써 개발 협업에서 사용하기 용이합니다.
> 

### **2. Properties**

타입스크립트의 컴파일러는 객체 프로퍼티의 두 가지 요소를 검사하는데 바로 프로퍼티의 타입과 필수 요소 유무입니다.

필수 요소 유무를 컨트롤하기 위해서 Optional 프로퍼티인 **`?`**을 이용할 수 있습니다. 프로퍼티 선언 시 이름의 끝에 **`?`**를 붙여서 표시합니다. **`?`**를 이용해 인터페이스에 속하지 않는 프로퍼티의 사용은 방지할 수 있습니다. 이는 객체 안의 몇 개의 프로퍼티만 채워서 사용하는 함수에 유용합니다. (이를 "option bags" 패턴이라고 부릅니다.)

```
interface SquareConfig {
  color?: string
  width?: number
}

```

또한 객체가 처음 생성될 때 값 설정이 가능하고, 이후 수정이 불가능하도록 설정하는 **`readonly`** 프로퍼티도 있습니다. 앞서 클래스 속성의 **`readonly`**와 동일합니다. 마찬가지로 역할도 **`const`**와 유사하며, 사용되는 위치가 다릅니다.

```
interface Point {
  readonly x: number
  readonly y: number
}

```

### **3. iterface types**

앞서 살펴보았듯이 타입스크립트에서 인터페이스는 함수와 클래스에서 사용이 가능합니다.

- 함수: 인터페이스를 이용해 함수의 타입, 인자의 타입, 반환 값의 타입을 정의할 수 있습니다. 위에서 보았던 예시는 인자의 타입을 **`Person`**으로 정의하고 있습니다.
    
    ```
    function greeting(person: Person): void {
        ...
    }
    
    ```
    
- 클래스 : 클래스가 특정 계약(통신 프로토콜)을 충족하도록 명시적으로 강제합니다. 선언한 인터페이스를 클래스 뒤에 **`implements`**하여 사용하며, 클래스는 인터페이스에 명시된 메소드를 반드시 구현해야 합니다. 위에서 보았던 예시는 **`Member`** 클래스가 **`Person`** 인터페이스를 **`implements`**하고 있는 것이며, 만약 **`Person`** 인터페이스에 추상 메소드가 있었다면 **`Member`** 클래스에서 구현해야 합니다.
    
    ```
    class Member implements Person {
        ...
    }
    
    ```
    
- 인터페이스 확장 : 클래스와 마찬가지로 인터페이스도 인터페이스 간의 확장이 가능합니다. 확장을 위해서는 **`extends`** 키워드를 사용합니다. **`Dog`** 인터페이스에서 **`Animal`** 인터페이스를 확장하고 있습니다.
    
    ```
    interface Animal {
        makeSound(): void
    }
    interface Dog extends Animal {
        speed: number
    }
    
    ```
    
- 하이브리드 타입 : 자바스크립트의 유연하고 동적인 타입 특성에 따라 인터페이스에서 여러 가지 타입을 조합해서 사용할 수 있습니다. 예를 들어 함수 타입이면서 동시에 객체 타입을 정의할 수 있는 인터페이스를 만들 수 있습니다. 아래는 **`Counter`** 인터페이스는 함수로서 호출도 가능하고, 여러 프로퍼티도 가지고 있습니다.**`getCounter()`** 함수에 나오는 **`as`**는 타입 단언을 위한 문법으로, 말 그대로 타입을 컴파일러가 추론하지 않도록 프로그래머가 직접 지정하는 것입니다.
    
    ```
    interface Counter {
        (start: number): string;
        interval: number;
        reset(): void;
    }
    function getCounter(): Counter {
        let counter = function (start: number) {} as Counter;
        counter.interval = 123;
        counter.reset = function () {};
        return counter;
    }
    
    ```
    

### **4. 디자인 패턴 (Strategy pattern)**

전략 패턴(Strategy pattern)이란 객체가 할 수 있는 행위들을 전략으로 만들어 두고, 동적으로 행위의 수정이 필요한 경우 전략만 수정이 가능하도록 만든 패턴입니다.

예를 들어 자판기 결제를 위한 **`pay`** 메소드가 있다고 가정합니다. 결제를 위한 다양한 방법이 있을텐데, 새로운 결제 수단이 추가될 때마다 **`pay`** 메소드에서 조건문을 이용해서 분기를 추가한다면 확장성이 떨어집니다. (소프트웨어 개체가 확장에 열려있어야 한다는 OCP(Open Closed Principle) 원칙에 위배됩니다.)

따라서 전략 패턴을 적용하여 이를 해결할 수 있습니다. 인터페이스를 이용해 결제를 하는 것 자체는 고정적으로 두고, 결제 방법(전략)을 인터페이스를 이용해 구현해 내는 것입니다. 예를 들어 결제를 하는 행위를 **`implements`**하되 현금으로 결제하는 메소드, 카드로 결제하는 메소드를 구분해서 구현하는 것입니다.

### interface 상속 후 클래스에 적용해보기

```jsx
// Animal 인터페이스를 선언하세요.
interface Animal {
    makeSound (): void ;
}

// Dog 인터페이스를 선언하세요.
interface Dog extends Animal {
    run (): void;
}

class BullDog implements Dog {
    makeSound () {
        console.log("멍멍");    
    }
    run () {
    console.log("달리기");
    }
}

// Dog class는 Animal interface를 implements했기 때문에 
// interface가 가지고 있는 함수를 class에서 구현시켜야합니다.

// 아래가 정상적으로 동작하도록 코드를 작성하세요.
const bullDog = new BullDog();
bullDog.makeSound(); // 멍멍 출력
bullDog.run(); // 달리기 출력
```

### 제네릭 예시 ( T | undefined는 Union)

```jsx
class Queue<T> {
protected data: Array<T> = [];
push(item: T) {
this.data.push(item);
}
pop(): T | undefined {
return this.data.shift();
}
}
const numberQueue = new Queue<number>();
numberQueue.push(0);
numberQueue.push("1"); // 의도하지 않은 실수를 사전 검출 가능
numberQueue.push(+"1"); // 실수를 사전 인지하고 수정할 수 있다
```

## **Union 타입, Intersection 타입**

**1. Union 타입**Union 타입이란 자바스크립트의 OR 연산자(||)와 비슷하게 **`'A' 이거나 'B'이다`**처럼 두 개 이상의 타입을 사용 가능하게 합니다.

**| 연산자**를 이용하여 타입을 여러 개 연결하는 방식을 유니온 타입 정의 방식이라고 부릅니다.

```
function logText(text: string | number) {
// ...
}
Copy
```

따라서 위 함수의 파라미터 text에는 문자열 타입이나 숫자 타입이 올 수 있습니다.

**Union Type 사용 이유**아래 2개의 코드를 비교해서 유니온 타입의 장점을 알아봅시다.

- 타입 any를 사용하는 경우

```
function getNumber(num: any) {
  num.toFixed();// 에러 발생return num;
}
Copy
```

어떠한 타입도 허용하는 any는 타입 체크로 엄격하게 관리하는 타입스크립트 입장에서 어떠한 정보를 알려주지 않기 때문에 문제가 발생하기 쉽습니다. 그래서 위처럼 숫자 관련된 함수를 작성할 때 에러를 발생합니다.

- 유니온 타입을 사용하는 경우

```
function getNumber(num: number | string) {
  if (typeof num == 'number') {
    return num.toFixed();// 정상 동작
  }
  if (typeof num == 'string') {
    return num;// 정상 동작
  }
  return new TypeError('num must be number or string');
}
Copy
```

**| 연산자**를 이용하여 유니온 타입을 사용하면 num의 타입이 ‘number’로 추론되기 때문에 숫자 관련된 API를 쉽게 자동완성 할 수 있습니다.

**2. Intersection 타입**인터섹션 타입(Intersection Type)은 여러 타입을 모두 만족하는 하나의 타입을 의미합니다.

```
interface Band {
  name: string;
  ranking: number;
}

interface Drummer {
  name: string;
  age: number;
}

type Prop = Band & Drummer;
Copy
```

위 코드는 Band 인터페이스와 Drummer 인터페이스의 타입 정의를 **& 연산자**를 이용하여 합친 후, Prop이라는 타입에 할당한 코드입니다. Prop의 타입은 아래와 같이 정의됩니다.

```
{
  name: string;
  ranking: number;
  age: number;
}
Copy
```

**&** 연산자를 이용해 여러 개의 타입 정의를 하나로 합치는 방식을 사용하면 됩니다.

## 제네릭은 컴파일 시점에서의 에러나 버그를 포착하게 한다?

## Java에서의 Generic을 예로 든 컴파일 시점에서 에러 포착이 가능한 이유

- 출처 : [https://yaboong.github.io/java/2019/01/19/java-generics-1/](https://yaboong.github.io/java/2019/01/19/java-generics-1/)

# **개요**

- 제네릭이란?
- 제네릭을 사용하는 이유
- 제네릭을 사용할 수 없는 경우
- 제네릭 메서드란?
- 제네릭 타입 제한하기 (Bounded Type Parameter)

# **서론**

사실 제네릭을 공부할 생각은 없었다. 이미 잘 쓰고있고 잘 이해하고 있다고 착각(?) 했기 때문이다. 자바로 개발을 하면서 JDK 소스를 볼일이 한번씩 생기는데, 자바를 개발한 사람은 이걸 어떻게 만들었나 훑어보다가 ‘봐도 모르겠네~’ 하고 넘어가는게 습관처럼 되어 버렸다. 그러다가 JPA 를 사용하면서 Optional 을 사용하게 됐고, Optional 을 사용하다보니 람다와 스트림 API 를 사용하게 됐고, 그러다가 만난녀석이

```jsx
public void ifPresent(Consumer<? super T> consumer) {
    if (value != null)
        consumer.accept(value);
}
```

이놈이다.

`Consumer<? super T>` 는 대체 뭐하는 놈일까 궁금해졌다. 항상 그냥 지나치다가 이번에는 좀 짚고 넘어가야겠다 싶어서 다시 공부해보았다. 이번 포스팅에서는 저놈이 뭐하는 놈인지 설명하지는 않고, 저놈이 뭐 하는 놈인지 이해하기 위한 배경지식을 쌓는 포스팅이다.

# **제네릭이란**

JDK1.5 에 처음 도입되었다.

- Generics add stability to your code by making more of your bugs detectable at compile time. – Oracle Javadoc
- 제네릭(Generic)은 클래스 내부에서 사용할 데이터 타입을 외부에서 지정하는 기법을 의미한다. – 생활코딩
- 지네릭스는 다양한 타입의 객체들을 다루는 메서드나 컬렉션 클래스에 컴파일 시의 타입체크를 해주는 기능이다. – 자바의 정석

대충 읽어보면 뭔가 타입에 대한 정보를 동적으로 넘겨줄 수 있고, 런타임시에 발생할 수 있는 오류를 컴파일 타임에 발견할 수 있도록 하는 것 같다. 일단 이정도 이해하고 넘어가고 예제를 보면서 하나씩 뜯어보자.

# **제네릭을 사용하지 않는 경우 문제점**

자바에서 자주 사용하게 되는 ArrayList 를 모방하여, 아주 간단하고 제네릭을 사용하지 않는 SimpleArrayList 를 만들어보자. 제네릭을 사용하지 않아도 여러가지 타입을 받아 저장할 수 있는 ArrayList 를 만들 수 있다. 모든 클래스는 Object 클래스를 상속받기 때문에 Object 타입으로 받으면 그 어떤 타입이라도 받을 수 있기 때문이다.

제네릭을 사용하지 않고도 어떤 타입이든 5개 요소를 담을 수 있는 ArrayList 를 만들면 아래와 같다.

(설명의 편의를 위해 capacity 가 다 찼을 때 array 를 resizing 하거나 하는 로직은 모두 빼고 보도록 하자. 혹시 궁금하다면… [여기](https://yaboong.github.io/data-structures/2018/02/08/array-and-java-array-list/)와 [여기](https://yaboong.github.io/data-structures/2018/02/09/array-advanced-1-stack/)를 참고하기 바란다.)

```jsx
public class SimpleArrayList {
    private int size;
    private Object[] elementData = new Object[5];

    public void add(Object value) {
        elementData[size++] = value;
    }

    public Object get(int idx) {
        return elementData[idx];
    }
}
```

이제 이걸 사용해보자.

```jsx
public class SimpleArrayListTest {
    public static void main(String[] args) {
        SimpleArrayList list = new SimpleArrayList();

        list.add(50);
        list.add(100);

        Integer value1 = (Integer) list.get(0);
        Integer value2 = (Integer) list.get(1);

        System.out.println(value1 + value2);
    }
}
```

컴파일도 잘 되고 잘 동작하는 것을 확인할 수 있다.

add() 메소드는 파라미터로 Object 를 받기 때문에 어떤 데이터타입도 모두 받을 수 있다. 그러므로 list.get() 부분에서 형변환만 잘 시켜주면 어떤 데이터 타입이든 저장할 수 있다. add(50) 에 들어가게될 50이 스트링으로 들어가게 됐다고 가정해보면 코드는 아래와 같이 될 것이다.

```jsx
public class SimpleArrayListTest {
    public static void main(String[] args) {
        SimpleArrayList list = new SimpleArrayList();

        list.add("50");  // 달라진부분
        list.add("100"); // 달라진부분

        Integer value1 = (Integer) list.get(0);
        Integer value2 = (Integer) list.get(1);

        System.out.println(value1 + value2);
    }
}
```

add() 메서드는 Object 타입은 모두 받을 수 있으므로 String, Integer 모두 인자로 줄 수 있다. get() 메서드도 Object 타입을 반환하기 때문에 `Integer value1 = (Integer) list.get(0);` 이라는 코드에는 문법적으로 아무런 문제가 없다.

실제로도 컴파일이 잘 되는데, 실행하면 런타임에 아래와 같은 오류가 발생하게 된다.

```jsx
`Exception in thread "main" java.lang.ClassCastException:
    java.lang.String cannot be cast to java.lang.Integer
    at com.example.java.generics.basic.SimpleArrayListTest.main(SimpleArrayListTest.java:11)`
```

잘못된 타입캐스팅이 이루어졌다는 오류메시지이다. String 을 넣어놓고서 Integer 로 형변환했기 때문이다.

(제네릭 없는 자바를 사용해보지는 않았지만) 위와같은 방식으로 사용하는 경우, 어떤 타입으로 형변환 할 수 있는지 조차 모호한 경우도 많기 때문에 잠재적인 오류를 가지고 있는 매우 좋지 않은 방식이다.

> 하지만 컴파일 시점에서는 어떤 오류도 발생하지 않는다는 것이 문제다!
> 

이런 문제를 해결하기 위해 Integer 타입을 가질 수 있는 SimpleArrayList 를 만들고, String 타입을 가질 수 있는 SimpleArrayList 를 만들 수 있다.

### **SimpleArrayListForInteger.java**

```jsx
public class SimpleArrayListForInteger {
    private int size;
    private int[] elementData = new int[5];

    public void add(int value) {
        elementData[size++] = value;
    }

    public int get(int idx) {
        return elementData[idx];
    }
}
```

### **SimpleArrayListForString.java**

```jsx
public class SimpleArrayListForString {
    private int size;
    private String[] elementData = new String[5];

    public void add(String value) {
        elementData[size++] = value;
    }

    public String get(int idx) {
        return elementData[idx];
    }
}
```

코드의 중복이 생기기 시작한다. 같은 역할을 하는 메소드 add(), get() 이지만 두 군데에 생긴다. 메서드 파라미터 타입과 반환타입이 서로 달라서 인터페이스나 상속을 통해 해결할 수도 없다. 아니면 SimpleArrayList 생성시 변수명을 intList, stringList 처럼 변수명을 다르게 해서 표현할 수도 있을 것 같지만 그래도 좋은 해결방법은 아닌 것 같다.

# **제네릭을 사용해서 문제해결**

### **GenericArrayList.java**

```jsx
public class GenericArrayList<T> {

    private Object[] elementData = new Object[5];
    private int size;

    public void add(T value) {
        elementData[size++] = value;
    }

    public T get(int idx) {
        return (T) elementData[idx];
    }
}
```

<T> 로 표현한 것이 제네릭이다. GenericArrayList 는 객체를 생성할때 타입을 지정하면, 생성되는 오브젝트 안에서는 T 의 위치에 지정한 타입이 대체되어서 들어가는 것 처럼 컴파일러가 인식한다. 좀 더 정확하게 말하면, Raw 타입 으로 사용하는데 컴파일러에 의해 필요한 곳에 형변환 코드가 추가된다. (List<String> 을 List 로만 쓰는 것이 Raw 타입으로 사용하는 것이다)

사용은 아래처럼 할 수 있다. 형변환이 필요없다는 것, 지정한 타입과 다른 타입의 참조변수를 선언하면 컴파일타임에 오류가 발생한다는 것이 중요포인트다.

### **Test.java**

```jsx
class Test {
    public static void main(String[] args) {
        GenericArrayList<Integer> intList = new GenericArrayList<>();
        intList.add(1);
        intList.add(2);

        int intValue1 = intList.get(0); // 형변환이 필요없다
        int intValue2 = intList.get(1); // 형변환이 필요없다

        // String strValue = intList.get(0); // 컴파일에러
    }
}
```

위 Test.java 파일을 컴파일하고, 컴파일한 Test.class 파일을 역컴파일하면 아래와 같은 결과를 볼 수 있다.

### **디컴파일 한 결과 (Test.java -> Test.class -> decompile)**

```jsx
class Test {
    Test() {
    }

    public static void main(String[] var0) {
        GenericArrayList var1 = new GenericArrayList(); // 제네릭이 사라졌다
        var1.add(1);
        var1.add(2);
        int var2 = (Integer)var1.get(0); // 형변환이 추가되었다
        int var3 = (Integer)var1.get(1); // 형변환이 추가되었다
    }
}
```

GenericArrayList<Integer> 로 생성했던 타입파라미터가 사라지고, Raw 타입으로만 사용하는데, 값을 꺼내 쓰는 곳에 형변환 코드가 추가되었다. 제네릭을 사용하면 컴파일러가 형변환을 알아서 진행한다는 것을 확인했다.

# **한정적 타입 매개변수 (Bounded Type Parameter)**

제네릭으로 사용될 타입 파라미터의 범위를 제한할 수 있는 방법이 있다.

위에서 만든 GenericArrayList 가 Number 의 서브클래스만 타입으로 가지도록 하고 싶은 경우 아래와 같이 제네릭의 타입을 제한할 수 있다. (인터페이스나 클래스나 추상클래스나 모두 extends 를 사용한다)

`public class GenericArrayList<T extends Number>`

위와 같이 정의했다면 GenericArrayList 에는 String 을 담을 수 없다.

Number 의 상위클래스만 타입으로 가지도록 하고 싶은 경우 (적절한 예시는 아니지만) 아래와 같이 제네릭의 타입을 제한할 수 있다.

`public class GenericArrayList<T super Number>`

바운디드 타입 파라미터가 사용되는 가장 흔한 예시는 Comparable 을 적용하는 경우다. T extends Comparable<T> 와 같이 정의하면 Comparable 인터페이스의 서브클래스들만 타입으로 사용하겠다는 것이다. Comparable 인터페이스를 구현하기 위해서는 compareTo() 메소드를 반드시 정의해야하기 때문에 Comparable 인터페이스를 구현한 클래스들은 비교가 가능한 타입이 된다.

비교하는 로직이 들어간 클래스에는 비교가 가능한 타입들을 다루는 것이 맞을 것이다. 이를 강제하도록 할 수 있는게 바운디드 타입 파라미터이다.

# **제네릭을 사용할 수 없는 경우**

GenericArrayList 를 정의할 때, 다른 부분에는 모두 T 를 사용했는데, 배열을 생성하는 부분에서는 T 를 사용하지 않고 Object 를 사용했고 get() 호출시 T 타입으로 형변환 하는 코드를 삽입했다.

GenericArrayList 가 가지는 elementData 도 new T[5] 와 같이 생성하면 get() 메서드에서 (T) 로 형변환 하는 작업을 안해도 될텐데 왜 한걸까?

그 이유는 new 연산자 때문이다. new 연산자는 heap 영역에 충분한 공간이 있는지 확인한 후 메모리를 확보하는 역할을 한다. 충분한 공간이 있는지 확인하려면 타입을 알아야한다. 그런데 컴파일 시점에 타입 T 가 무엇인지 알 수 없기 때문에 new T[5] 와 같이 **제네릭으로 배열을 생성할 수는 없다.**

**static 변수에도 제네릭을 사용할 수 없다.** static 변수는 인스턴스에 종속되지 않는 클래스변수로써 모든 인스턴스가 공통된 저장공간을 공유하게 되는 변수이다.

static 변수에 제네릭을 사용하려면, GenericArrayList<Integer> 에서는 Integer 타입으로, GenericArrayList<String> 에서는 String 타입으로 사용될 수 있어야 하는데 하나의 공유변수가, 생성되는 인스턴스에 따라 타입이 바뀐다는 개념 자체가 말이 안되는 것이다. 그래서 static 변수에는 제네릭을 사용할 수 없다.

하지만, (아래에서 살펴보겠지만) **static 메서드에는 제네릭을 사용할 수 있다.**

# **제네릭 메서드**

static 메서드에는 제네릭을 사용할 수 있다고 했는데 왜 그런 것일까? 이 질문에 대답하기 전에 제네릭 메서드가 무엇인지 먼저 살펴보자.

### **제네릭 메서드란**

제네릭 메서드를 정의할때는 리턴타입이 무엇인지와는 상관없이 내가 제네릭 메서드라는 것을 컴파일러에게 알려줘야한다. 그러기 위해서 리턴타입을 정의하기 전에 제네릭 타입에 대한 정의를 반드시 적어야 한다.

그리고 중요한 점이 제네릭 클래스가 아닌 일반 클래스 내부에도 제네릭 메서드를 정의할 수 있다. 그 말은, 클래스에 지정된 타입 파라미터와 제네릭 메서드에 정의된 타입 파라미터는 상관이 없다는 것이다. 즉, 제네릭 클래스에 <T> 를 사용하고, 같은 클래스의 제네릭 메서드에도 <T> 로 같은 이름을 가진 타입파라미터를 사용하더라도 둘은 전혀 상관이 없다는 것을 의미한다.

### **static 메서드 with 제네릭**

바로 위에서, static 변수에는 제네릭을 사용할 수 없지만 static 메서드에는 제네릭을 사용할 수 있다고 했는데 왜 그런 것일까?

앞서 말한 것 처럼 static 변수의 경우에 제네릭을 사용하면 여러 인스턴스에서 어떤 타입으로 공유되어야 할지 지정할 수가 없어서 사용할 수 없다. static 변수는 값 자체가 공유되기 때문이다. 값 자체가 공유되려면 타입에 대한 정보도 있어야 한다.

하지만, static 메서드의 경우 메서드의 틀만 공유된다고 생각하면 된다. 그리고 그 틀 안에서 지역변수처럼 타입 파라미터가 다양하게 오가는 형태로 사용될 수 있는 것이다.

이는 static 메서드가 아닌 인스턴스 메서드의 경우에도 마찬가지다. 클래스에 정의된 타입 파라미터와는 전혀 별개로 제네릭 메서드는 자신만의 타입파라미터를 가진다.

### **static 메서드 with 제네릭 주의사항**

착각하면 안되는 것이, 아래와 같은 static 메서드는 허용되지 않는다. 아래 코드에는 두 가지 오류가 있는데, 첫번째는 param 의 타입인 T 를 알 수 없다는 것이고, 두번째는 T 의 타입을 알 수 없기 때문에 charAt() 메서드 호출이 불가능 하다는 것이다.

```jsx
public static void printFirstChar(T param) {
    System.out.println(param.charAt(0));
}
```

허용되지 않는 가장 중요한 이유는 제네릭 메서드가 아니기 때문이다. 리턴 타입 앞에 제네릭에 대한 선언이 없다.

클래스에 표시하는 <T> 는 인스턴스 변수라고 생각하면 된다. 인스턴스가 생성될때마다 지정되는 것이기 때문이다. 그러므로, static 메서드에서 인스턴스 변수로 여겨지는 타입 파라미터를 사용하고 있으므로 컴파일 에러가 발생한다.

static 메서드에서 제네릭을 사용하려면 아래처럼 제네릭 메서드로 정의해야 한다.

```jsx
public static <T extends CharSequence> void printFirstChar(T param) {
    System.out.println(param.charAt(0));
}
```

제네릭 메서드 선언시 <T> 만 사용해도 상관없다. 위 예시의 경우 charAt() 메서드를 호출하기 위해서 CharSequence 의 서브타입만 가능하다는 제약을 넣은 것이다.

printFirstChar() 제네릭 메서드를 GenericArrayList 에 정의해 주었다면 호출은 아래와 같이 하면 된다.

`GenericArrayList.<String>printFirstChar("YABOONG");`

그런데 여기서 “YABOONG” 을 통해 인자의 타입이 String 인 것을 컴파일러가 추론할 수 있으므로 <String> 은 생략가능하다. 대부분의 경우 타입추론이 가능하므로 아래와 같이 타입은 생략하고 호출할 수 있다.

`GenericArrayList.printFirstChar("YABOONG");`

### **TIP**

printFirstChar(T param) 에서 param 변수의 타입은 T 로 아직 지정되지 않았음에도 param.charAt(0) 처럼 charAt() 메서드 호출이 가능한 이유는 <T extends CharSequence> 를 통해 CharSequence 인터페이스를 하위 클래스 타입만 받도록 제한했기 때문이다. CharSequence 인터페이스의 하위 클래스 타입이 되려면 charAt() 을 포함하여 CharSequence 에 정의된 메서드들을 반드시 구현해야 한다.

# **요약**

제네릭을 사용하는 이유는 아래와 같다.

- 형변환이 필요없고, 타입안정성이 보장된다.
- 코드의 재사용성이 높아진다.

# **참고한 자료**

- [[Udemy] Introduction to Collections & Generics in Java](https://www.udemy.com/introduction-to-generics-in-java/)
- [[Tutorials Point] Java Generics](https://www.tutorialspoint.com/java/java_generics.htm)
- [[Tutorials Point] Java Generics - No Static field](https://www.tutorialspoint.com/java_generics/java_generics_no_static.htm)
- [[Oracle Javadoc] Generics](https://docs.oracle.com/javase/tutorial/java/generics/index.html)
- [[Oracle Javadoc] Why Use Generics?](https://docs.oracle.com/javase/tutorial/java/generics/why.html)
- [[도서] 자바의 정석](http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9788994492032&orderClick=LAG&Kc=)

제네릭 코드

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/25d81c49-bdef-4d48-970b-9ccfe207f392/Untitled.png)

### **keyof**

- 제네릭의 제약조건 중 하나이며, **두객체를 비교**할 때 사용한다.

### constraints

- 

Constraints
• Generic T에 제약 조건을 설정한다. (문자열 or 숫자)
• 제약 조건을 벗어나는 타입을 선언하면 에러가 발생한다

### 디자인 패턴 (Factory Pattern with Generics)

객체를 생성하는 인터페이스만 미리 정의하고,
인스턴스를 만들 클래스의 결정은 서브 클래스가 내리는 패턴
• 여러 개의 서브 클래스를 가진 슈퍼 클래스가 있을 때,
입력에 따라 하나의 서브 클래스의 인스턴스를 반환한다.

```jsx
interface Car {
  drive(): void
  park(): void
}

// Bus 클래스와 Taxi 클래스를 생성하세요.
class Bus implements Car {
    drive(): void {}
    park(): void {console.log("버스 주차")}
}

class Taxi implements Car {
drive(): void {}
    park(): void {console.log("택시 주차")}
}

// Factory pattern을 적용하기 위한 서브 클래스입니다.
class CarFactory { 
  static getInstance<T extends Car>(type: { new (): T }): T {
    return new type()
  }
}

// CarFactory 클래스의 getInstance메소드를 이용해서 Bus, Taxi 인스턴스를 생성해주세요. 
const bus = CarFactory.getInstance(Bus);
const taxi = CarFactory.getInstance(Taxi); 

bus.park();
taxi.park();
```

### 

## **타입스크립트 컴파일러(TSC) 동작 확인하기**

여러분이 작성한 모든 코드들을 컴퓨터가 이해하도록 AST(추상 구문 트리)라는 자료구조로 변환하고 컴퓨터에서 실행 가능한 프로그램을 생성하는 것이 컴파일러입니다.

### **Typescript Compiler(TSC) 과정**

타입스크립트로 작성된 코드가 어떻게 유저에게 전달되는 과정은 이렇게 요약됩니다.

1. 개발자가 타입스크립트 코드를 작성
2. 컴파일러가 타입스크립트 코드를 AST(추상구문트리)라는 자료구조로 변환
3. 타입검사기(Typechecker)가 AST의 코드의 타입 안정성을 검증
4. 타입스크립트 AST → 자바스크립트 소스로 변환

– 아래부터 브라우저, NodeJS, 기타 자바스크립트 엔진(node.js) 등이 수행—

1. 자바스크립트 소스 → 자바스크립트 AST로 변환
2. 자바스크립트 AST → Bytecode로 변환
3. JS 런타임이 Bytecode를 평가, 실행 결과 보여줌

이번 실습에서는 터미널에서 타입스크립트를 실행해보겠습니다.

## **지시사항**

로컬에서 typescript 파일을 실행 방법을 바탕으로 이 실습 터미널에서 진행하겠습니다.

1. 터미널에서 node로 javascript 파일을 실행하세요.**`node index.js`**
2. ts-node를 설치하세요.**`yarn add ts-node-dev --dev`**
3. ts-node로 typescript 를 실행하세요.**`ts-node index.ts`**

**로컬에서 typescript 파일 실행 방법**로컬에서도 위와 마찬가지로 진행한 후 Code Runner(VScode extension)로 typescript 파일을 실행합니다.(1) 자바스크립트 엔진 (Node.js) 설치(2) 타입스크립트 설치(3) Code Runner extension을 설치(4) 실행하고자 하는 타입스크립트 파일(index.ts) 실행(**`npx ts-node index.ts`**)