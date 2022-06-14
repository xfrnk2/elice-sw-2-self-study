## 리액트의 특징

UI를 구성하기 위해 '컴포넌트'라는 단위로 개발을 진행한다.

React는 내부적으로 Virtual DOM(가상 DOM)을 통해 렌더링을 진행한 뒤 변경점만 사용자 화면에 반영한다.

JSX를 사용하는 것은 선택사항이다. 그러나 개발 효율을 위해 사용하는 것을 권장하고 있다.

React는 대규모 프로젝트에서 데이터를 효율적으로 관리하는데 유용하지만 실행속도 면에서는 다소 불리하다.

React에서는 컴포넌트 내의 데이터가 바뀌면 자동으로 감지하여 UI를 업데이트한다.

(리액트에서 상태는 값이 바뀌었을때 컴포넌트를 다시 실행한다.)

### 기타 팁

Create React App은 기본적으로 Client-side Rendering만 지원한다.

./public/index.html, ./src/index.js 파일은 필수파일이다.

### JSX 특징

JSX에서 style은 object로만 입력할 수 있다.

예) 잘못된 코드

```jsx
<div style="width: 100%; height: 30px;">Hello</div>
```

JSX는 HTML문법과는 다르므로 유의해야 한다.

- 또한 style명은 카멜케이스로 적는다.
- padding-left → paddingLeft

예)

```jsx
<div style={{
        padding: 48,
        backgroundColor: "blue",
        color: "red"
        }}>안녕하세요.</div>
```

# React 사용을 위한 Javascript 최신 문법

## **Optional Chaining**

Optional chaining 연산자는 객체나 변수에 연결된 다른 속성 참조할 때 유효한 속성인 지 검사하지 않고 값을 읽을 수 있도록 해줍니다. 만약 유효한 속성이 아닐 경우 에러를 발생시키지 않고 **`undefined`**를 반환해줍니다.

### **예시(객체)**

```
const a = {
    b: {
        c: 1
    }
}
console.log(a?.b?.c);// 1console.log(a?.x?.c);// undefinedconsole.log(a?.x.c);// ErrorCopy
```

배열의 경우 **`array?.[index]`** 와 같이 사용할 수 있습니다.

### **예시(배열)**

```
const a = [{x:1,y:2}, {x:3,y:4}];

console.log(a?.[1]?.x);// 3console.log(a?.[2]?.x);// undefined
```

## 학습 자료집 1

## **React란?**

React(리액트)란 사용자 인터페이스를 구축하기 위한 자바스크립트 라이브러리입니다. React는 선언적이고 효율적이며, 유연합니다. 또한 React의 컴포넌트(component)라고 하는 요소를 이용하면 복잡한 UI를 독립적인 단위로 쪼개어 구현할 수 있습니다.

### **등장 배경**

React를 개발하기 전에는 페이스북은 성능이 좋은 동적 UI를 구축하는 과제에 직면했습니다. 예를 들어, 사용자가 채팅하는 동시에 뉴스 피드 업데이트가 이루어지길 원했습니다. 이를 위해 페이스북은 개발 프로세스 최적화를 해야 했고 그에 따라 자바스크립트를 사용하기로 했습니다. 그리고 페이스북 마크업 구문인 XHP를 자바스크립트에 넣을 것을 제안했습니다. 이것은 불가능해 보였지만 2011년에 페이스북은 자바스크립트와 XHP 공생을 기반으로 React 라이브러리를 출시했습니다. React는 2013년 오픈 소스화되었으며 다른 어떤 도구보다 빠르게 동작합니다.

### **그렇다면, React를 왜 사용해야 할까요?**

프론트엔드(Front-end)를 만드는 라이브러리는 상당히 많습니다. HTML과 CSS, Javascript, Jquery 등 다양한 방법으로 얼마든지 제작이 가능합니다. 하지만, 요즘 같은 복잡한 동적인 웹페이지를 만드는 시대에는 다릅니다.

웹 페이지는 각 페이지마다 페이지를 관리해줘야 하고, 사용자의 응답에 따라 인터페이스가 지속적으로 변해야 합니다. 하지만, 그렇게 하기 위해선 기존 방식으로 관리하기는 어렵습니다. React는 이런 어려움을 해결해줍니다!! 이미, 위에 등장 배경에서처럼 페이스북에서 적용해 증명했으니 해결은 충분히 가능하겠죠? 요즘은 React를 Airbnb와 Netflix에서도 React를 사용하면서 점점 생태계가 커지고 있습니다.

**한 마디로! React를 사용하는 이유들을 정리하면 “사용자와의 소통을 UI로 쉽게 구현하고 대규모의 웹페이지를 관리하기 위해 사용한다”라고 말할 수 있습니다.**

### **장점**

- React의 **Virtual DOM**은 사용자 경험을 향상하고 개발자의 작업 속도를 높입니다. Virtual DOM이란 가상적인 표현을 메모리에 저장하고 ReactDOM과 같은 라이브러리에 의해 실제 DOM과 동기화하는 프로그래밍 개념입니다.
- React **컴포넌트**의 재사용은 개발 시간을 크게 절약합니다.
- **단방향 데이터 흐름**을 통해 안정적인 코드를 제공합니다. 단방향 데이터 흐름은 데이터는 항상 일정한 장소에 있고, 그 장소에서만 변경이 가능한 것을 의미합니다.
- **오픈 소스**이며 페이스북 라이브러리이기 때문에 지속해서 개발되고 커뮤니티에 공개됩니다.
- **Hooks**를 이용해 컴포넌트의 상태를 쉽게 관리할 수 있습니다.
- 여러 **개발 도구**를 지원합니다. 예를 들어 크롬에서는 React Developer Tools라는 확장 프로그램을 제공합니다.

### **파일 구조**

![https://elice-api-cdn.azureedge.net/api-attachment/attachment/974d04669dce41af8af09276f858afd5/image.png](https://elice-api-cdn.azureedge.net/api-attachment/attachment/974d04669dce41af8af09276f858afd5/image.png)

CRA의 버전이 올라가면서 현재는 **`serviceWorker.js`** 파일 대신에 **`reportWebVitals.js`** 파일이 생성되고 있습니다. 실행에는 큰 차이가 없으나, 일부 실습에 해당 파일이 포함되어 있을 수 있으니 참고하시기를 바랍니다.

> 지금 등장하는 모든 용어들에 대해 암기하실 필요는 없습니다. 우선 React의 전체적인 구조와 흐름에 집중해서 학습을 진행하세요.상기 모든 내용은 React 공식 문서 를 기반으로 작성되었습니다.
> 

---

React와 ReactDOM은 모두 CDN을 통해 사용할 수 있습니다.

**DOM**(Document Object Model)이란 HTML 요소들을 노드로 포함하는 트리와 같은 구조를 말합니다.

**CDN**(Contents Delivery Network)은 지리적 물리적으로 떨어져 있는 사용자에게 컨텐츠 제공자의 컨텐츠를 더 빠르게 제공할 수 있는 기술을 말합니다. CDN을 사용하면 다음과 같은 이점이 있습니다.

- 온라인 콘텐츠를 빠르게 전송 가능합니다.
- 시스템을 정상적으로 사용가능한 정도(가용성)가 높습니다.
- 외부의 다양한 공격을 방지합니다.

React에서 CDN을 활용하기 위해서는 **`index.html`** 파일의 **`<head>`**태그 내에 **`crossorigin`** 속성을 이용하면 됩니다. 해당 속성을 통해 실행 중인 React 앱이 해당 출처의 리소스에 접근할 수 있는 권한을 부여할 수 있도록 알려줄 수 있습니다.

```
<script crossorigin src="..."></script>
```

---

## **React와 자바스크립트의 차이점**

앞서 페이스북 사례를 통해 웹 앱 변화에 대응하여 프로세스 속도를 높이기 위해 React가 등장한 배경에 대해 확인했습니다. 그렇다면 React와 자바스크립트의 차이점이 무엇인지, 왜 굳이 React를 사용하는지에 대해 알아보겠습니다.

React는 앱 작성 방식을 정의하는 라이브러리입니다. 이는 데이터가 앱에 사용되는 방식과 그 데이터가 변화하는 결과에 따른 UI 변경 방법에 대해 명확한 규칙을 설정하여 수행합니다. 반면 자바스크립트는 규칙을 설정하지 않는 스크립트 언어라고 할 수 있습니다. 따라서 이러한 라이브러리 없이 작성된 앱은 더 자유로울수는 있지만, 정해진 것이 없기 때문에 코드를 작성하다가 길을 잃어버리기 쉽습니다.

먼저 React와 자바스크립트의 차이점 4가지를 간단한 코드와 함께살펴보겠습니다. 만약 자바스크립트의 문법이 익숙하지 않다면, 어떠한 문법들이 있었는지 [튜토리얼](https://developer.mozilla.org/ko/docs/A_re-introduction_to_JavaScript)을 다시 확인해 보시기 바랍니다.

### **사용자 인터페이스를 처음 만드는 방법**

**자바스크립트**자바스크립트에서 사용자 인터페이스는 보통 아래처럼 HTML을 통해 구현합니다. 이 때 자바스크립트는 따로 추가적인 코드가 필요하지 않습니다.

```
<div>
    <h1>엘리스 회원 목록</h1>
    <ul>
        <li>도도새</li>
        <li>모자장수</li>
        <li>체셔</li>
    </ul>
</div>

```

**React**반면 React는 JSX로 반환되는 컴포넌트를 통해 UI를 정의합니다. JSX는 HTML처럼 보이지만 실제로는 자바스크립트입니다. 아래에서 생성된 **`MemberList`** 컴포넌트는 이후 ReactDOM 라이브러리에 의해 렌더링되어 화면에 출력될 수 있습니다.

```
function MemberList(props) {
    return (
        <div>
            <h1>엘리스 회원 목록</h1>
            <ul>
                <li>도도새</li>
                <li>모자장수</li>
                <li>체셔</li>
            </ul>
        </div>
    )
};

```

### **앱에서 기능이 분할되는 방식**

**자바스크립트**자바스크립트 앱에서는 앱의 기능 또는 UI의 요소를 분할하는 방법에 대한 특별한 요구사항이 없습니다. 기본적인 출력은 아래처럼 기본 HTML 파일에 정의합니다.

```
<div>
    <h1>엘리스 회원 목록</h1>
    <ul id="member-list">
        <li>도도새</li>
        <li>모자장수</li>
        <li>체셔</li>
    </ul>
</div>

```

그리고 목록을 업데이트하는 코드를 자바스크립트 파일에 넣어야 합니다.

```
function addMember() {
  ...
}

```

코드가 이렇게 작성되어야 하는 이유는 [관심사 분리](https://ko.wikipedia.org/wiki/%EA%B4%80%EC%8B%AC%EC%82%AC_%EB%B6%84%EB%A6%AC) 원칙에 따라 화면에 출력을 하는 HTML과 기능을 구현하는 자바스크립트가 분리되도록 설계하였기 때문입니다. 하지만 이러한 방식은 앱이 복잡해짐에 따라 큰 골칫거리가 되었습니다. 왜냐하면 하나의 HTML을 구성하는 코드가 서로 다른 자바스크립트 파일에 있을 수 있기 때문에 HTML의 기능이 구현된 코드가 위치한 곳을 기억하기 어렵기 때문입니다.

**React**반면 React를 이용하면 위의 기능을 구현하는데 필요한 코드를 하나의 파일로 유지할 수 있습니다.

```
function MemberList(props) {
    function addItem() {
        ...

    }

    return (
        <div>
            <h1>엘리스 회원 목록</h1>
            <ul>
                <li>도도새</li>
                <li>모자장수</li>
                <li>체셔</li>
            </ul>
        </div>
    )
};

```

이렇게 하면 앱이 복잡해 지더라도 쉽게 이해할 수 있고 만들어 놓은 컴포넌트를 앱 전체가 공유할 수 있으므로 코드의 재사용이 가능해집니다.

---

계속해서 React와 자바스크립트의 차이점에 대해 알아보겠습니다.

### **브라우저에 데이터가 저장되는 방법**

**자바스크립트**자바스크립트에서 사용자 데이터는 일반적으로 DOM(문서 객체 모델)에 저장됩니다. DOM은 브라우저 자체에서 만들고 유지 관리하며 전체 HTML을 나타냅니다. 예를 들어 자바스크립트에서는 아래와 같이 텍스트 박스를 정의하고 사용자가 입력하면 해당 내용이 브라우저에 저장됩니다.

```
<input type="text" id="input-member" />

```

그리고 사용자가 값을 입력할 때 개발자가 먼저 DOM에서 값을 찾은 다음 추출하여 해당 입력 상자에 값을 수동으로 입력합니다.

```
const input = document.getElementById("input-member");
console.log(input.value);

```

이는 보기에 편리해보이지만 만약 **`id`**가 바뀌게 되면 해당 **`id`**를 사용하는 모든 코드를 다시 수정해야 하기 때문에 관리하기가 번거롭습니다.

**React**반면 React는 사용자의 입력을 기반으로 자신의 상태를 관리하고 업데이트 하는 제어 컴포넌트를 이용해 사용자 입력 시 자바스크립트 객체의 텍스트 값을 설정합니다. 이를 위해 먼저 상태를 정의해야 합니다.

```
const [member, setMember] = useState("");

```

입력이 변경될 때마다 설정이 되어야 하므로 HTML 코드는 조금 복잡해질 수 있습니다.

```
<input type="text" value={member} onChange={e => setMember(e.target.value)}

```

하지만 위와 같이 설정 후에는 아래 코드를 이용해 텍스트 박스의 현재 값을 훨씬 쉽게 알 수 있습니다.

```
console.log(member);

```

보는 것처럼 **`id`**를 별도로 관리할 필요가 없어 코드를 관리하기가 편리합니다. 현재 앱의 상태를 저장하기 위해 DOM에 의존하지 않음으로써 React가 사용자 데이터를 관리하는 이점은 앱이 성장할수록 누적됩니다. 자바스크립트 변수에 앱의 상태를 저장하는 것은 React가 자바스크립트에 비해 얻을 수 있는 가장 큰 이점 중 하나이며 앱이 복잡할수록 해당 이점이 커집니다.

### **UI 업데이트 방법**

React와 자바스크립트의 마지막 차이점은 이벤트 발생 시 앱이 사용자에 반응하는 방식과 새로운 변경 사항을 반영하는 UI 업데이트 방식입니다.

**자바스크립트**자바스크립트에서 텍스트 박스 옆에 다음처럼 버튼을 추가할 수 있습니다.

```
<input type="text" id="member" /> <button id="add-button">회원 추가</button>

```

그런 다음 해당 버튼을 누른 것에 응답하기 위해 DOM에서 버튼을 찾습니다.

```
const addButton = document.getElementById("add-button");

```

그리고 버튼에 **`click`** 리스너를 설정합니다.

```

addButton.addEventListener("click", function() {

  ...

})

```

그런 다음 리스너 내부에서 먼저 이전과 동일한 방법을 사용하여 입력 상자의 값을 가져올 수 있습니다. 그런 다음 식료품 목록에 새 항목을 추가하려면 DOM에서 목록을 찾고 추가 할 새 항목을 만든 다음 마지막으로 목록 끝에 추가해야합니다. 이것은 상당히 복잡합니다.

**React**반면 React 앱은 자바스크립트 변수의 전체 상태를 유지합니다.

```
const [members, setMembers] = useState(["도도새", "모자장수", "체셔"]);

```

그리고 변수의 각 항목을 매핑한 후 그에 대한 목록 요소를 반환하여 JSX에 표시합니다.

```
<ul>
    {members.map(member => (
        <li key={member}>{member}</li>
    ))}
</ul>

```

그런 다음 버튼을 누르는 기능을 정의합니다. 클릭 리스너는 필요하지 않고 **`onClick`** 버튼 자체에 속성을 추가 할 수 있습니다.

```
<button onClick={addMember}>회원 추가</button>

```

이 함수에 추가할 것은 **`setMember`** 함수를 사용하여 기존 항목에 새 항목을 추가하는 것입니다.

```
function addMember() { setMembers([...members, "새로운 회원"]); }

```

이로써 React는 목록이 변경되었음을 자동으로 등록하고 UI를 자동으로 업데이트합니다. 이 업데이트 기능은 React가 가진 위대함 중 하나입니다.

## 학습 자료집 2 - jsx

## **JSX**

JSX는 자바스크립트 XML의 약자이며 여기서 XML은 HTML의 한계를 극복하기 위해 만들어진 마크업 언어입니다. 즉 JSX는 자바스크립트를 확장한 문법이며 HTML을 React에서 쉽게 쓰기 위해 사용됩니다. 아래 코드를 살펴봅시다.

```
const element = <h1> Hello, elice! </h1>;

```

코드에는 HTML 태그가 들어가지만 그렇다고 해당 코드가 HTML 문법은 아닙니다. 이러한 문법이 바로 JSX이며, React에서 사용되는 문법입니다. React는 JSX 문법을 이용해 마크업 언어와 코드의 로직을 따로 분리하지 않고 두 가지를 포함한 **컴포넌트**라는 것을 사용합니다. 컴포넌트에 대한 설명은 추후에 살펴보도록 하겠습니다.

### **변수**

간단한 변수 선언 방식에 대해 먼저 알아봅시다. 변수 선언 방식은 **`const`**, **`let`**, **`var`** 세 가지가 있습니다. 형태는 다음과 같습니다.

```
변수선언방식 변수명 = 값;

```

여기서 선언이란 변수 선언 방식과 함께 값을 표기하는 것을 말합니다.

```
var a;

```

그리고 정의는 선언한 변수에 대해 값을 대입하는 것입니다.

```
a = 10;

```

재선언은 같은 이름의 변수를 같은 선언 방식으로 똑같이 만드는 것이고, 재정의는 선언 후 초기화된 변수의 값을 변경하는 것을 의미합니다.

**`var`** 같은 경우 아래처럼 재선언이 가능하지만 다른 선언 방식은 불가능합니다.

```
var name = "Chris";
var name = "John";

```

**`var`**과 **`let`**은 아래와 같은 재정의가 가능하지만 **`const`**는 불가능합니다.

```
let name = "Chris";
name = "John";

```

이를 간단히 표로 정리하면 다음과 같습니다.

[제목 없음](https://www.notion.so/d5f90f2e4ab94a1db3fed60e815471e2)

### **표현식**

JSX에서 중괄호를 이용해 사용 가능한 표현식들의 예시를 살펴보겠습니다. 먼저 중괄호를 이용해 HTML 내에 변수를 표현할 수 있습니다. 아래 **`element`** 변수는 위의 예시와 동일한 값을 가집니다.

```
const name = 'elice';
const element = <h1> Hello, {name}! </h1>;

```

또한 중괄호를 이용해 함수 표현식을 넣는 것도 가능합니다.

```
function greeting(){
  return "Hello, elice!";
}

const element = <h1>{greeting()}</h1>;

```

그리고 함수 내에서 표현식을 적용할 수도 있습니다.

```
function formatGreeting(name){
  return "Hello" + ' ' + name;
}

function getGreeting(user) {
  return <h1>Hello, {formatGreeting("elice!")}!</h1>;
}

```

### **속성**

큰 따옴표를 이용해 JSX의 속성을 지정할 수 있습니다.

```
const element = <a href = "https://kdt.elice.io/explore">엘리스로 이동</a>;

```

마찬가지로 속성도 표현식을 이용해 지정하는 것도 가능합니다.

```
const link = "https://kdt.elice.io/explore";
const element = <a href = {link}>엘리스로 이동</a>;

```

### **자식 정의**

자식 태그가 여러개 포함된 코드를 저장하기 위해서는 자식 태그를 부모 태그로 감싸야 합니다. 여기서 **`<div>`** 태그가 부모 태그, **`<h1>`**과 **`<h2>`**가 자식 태그입니다.

```
const element = (
  <div>
    <h1>Hello,</h1>
    <h2>elice!</h2>
  </div>
);

```

그리고 모든 태그는 반드시 닫혀야 한다는 것에 유의하세요. 다만 아래 코드에서 원래 태그 이름을 맞춰서 **`</input>`**처럼 닫아야 하지만, 이름은 생략하고 **`/>`**만 이용해서 닫아도 괜찮습니다.

```
const element = <input type="text" />;

```

### **객체 표현**

**`React.createElement()`** 메소드를 이용하면 JSX 문법을 이용하지 않고 객체로 표현할 수 있습니다. 자세한 사용 방법은 아래 예제와 함께 살펴보겠습니다. 아래의 두 코드는 문법이 조금 다르지만 같은 내용을 담고 있습니다.

```
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

```

```
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

```

기존 JSX 문법 대신에 **`React.createElement()`** 메소드를 이용하여 매개변수로 헤더, 속성, 출력 값을 순서대로 넘겨주면 됩니다.

## 학습 자료집 3 - 엘리먼트 랜더링

## **엘리먼트 렌더링**

엘리먼트란 React 앱의 가장 작은 단위를 말합니다. 또한 다음 장에서 배울 컴포넌트의 구성요소라는 것도 기억하시길 바랍니다. 엘리먼트에 화면에 표시할 것들을 기록하는데, 쉽게 말하자면 HTML 요소라고 할 수 있습니다. 렌더링은 이러한 요소들을 화면에 그리는 것입니다.

### **ReactDOM과 렌더링**

DOM(Document Object Model)이란 객체 지향 모델을 통해 구조화된 문서를 표현하는 형식입니다. React는 가상(Virtual) DOM과 실제로 표시되는 DOM을 유지합니다. React는 실제 DOM을 추상화하여 가상 DOM에 만들어두고, 데이터가 업데이트되면 **한 번에 렌더링**하기 때문에 계속해서 DOM을 렌더링하는 것보다 속도가 빠릅니다. **`ReactDOM.render()`** 메소드를 이용하면 렌더링을 하게 됩니다.

HTML 파일 안에 id가 root인 요소가 있다고 해봅시다.

```
<div id="root"></div>

```

해당 HTML에 텍스트를 넣기 위해 **`ReactDOM.render()`**을 이용해 다음과 같이 렌더링을 할 수 있습니다.

```
const element = <h1>Hello, elice</h1>;
ReactDOM.render(element, document.getElementById('root'));

```

매개변수로는 표시할 엘리먼트와 HTML 어디에서 표시할 지를 넘겨줘야 합니다. 이 때 **`document.getElementById()`** 의 매개변수에 찾을 id를 넘겨줌으로써 표시할 위치를 찾을 수 있습니다. 해당 함수는 넘겨준 id의 요소를 가져와줍니다.

### **엘리먼트 업데이트**

엘리먼트는 한 번 생성되면 수정이 불가능한 불변 객체이기 때문에 값을 변경하고 싶으면 새로운 엘리먼트를 만들어 업데이트 해야 합니다. 만약 시간을 출력하는 기능을 구현하고 싶다면 매 초마다 렌더링을 해줘야 합니다.

```
function tick() {
  const element = (
    <div>
      <h1>{new Date().toLocaleTimeString()}</h1>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

```

**`Date`**객체의 **`toLocaleTimeString()`** 메소드를 이용하면 시간을 반환해주는데 실제로 시간이 변하는 것을 확인하기 위해서는 **`setInterval()`** 콜백을 이용해 **`tick`**을 계속해서 호출해야 합니다. **`setInterval()`**의 매개변수인 1000은 1초를 의미하며 해당 숫자를 바꿔 호출되는 간격을 변경할 수 있습니다. 해당 코드를 실행한 후 개발자 도구를 이용하면 HTML의 텍스트가 시간이 변함에 따라 똑같이 바뀌는 것을 확인할 수도 있습니다.

## 학습 자료집 4 - 컴포넌트

## **컴포넌트**

앞선 장에서 여러 차례 언급된 컴포넌트에 대해 알아봅시다. 컴포넌트를 한 마디로 정의하자면 앱의 기능을 단위별로 캡슐화하는 React의 기본 단위입니다. 쉽게는 HTML 요소를 반환하는 함수와 같다고 생각해도 됩니다. 따라서 컴포넌트는 독립적이고 재사용 가능한 코드의 조각입니다. 컴포넌트는 종류로는 함수형 컴포넌트와 클래스형 컴포넌트가 있습니다.

### **함수형 컴포넌트**

함수형 컴포넌트를 어떻게 사용해야 하는지 예제와 함께 확인해봅시다. 먼저 함수형 컴포넌트를 선언해주고, **`ReactDOM.render()`**를 이용해 렌더링을 해주면 됩니다. 매개변수로 함수형 컴포넌트를 **`<함수 이름 />`**와 같은 형태로 넘겨주고 요소를 표기할 곳을 함께 넘겨줍니다.

```
function Introduce() {
  return <h2>Hi, I am elice!</h2>;
}

ReactDOM.render(<Introduce />, document.getElementById('root'));

```

### **클래스형 컴포넌트**

클래스형 컴포넌트도 마찬가지로 렌더링을 해주면 되며 구조만 약간 다릅니다. **`class`** 선언 시 **`React.Component`**의 메소드들을 사용하기 위해서 **`extends`**를 이용해 **`React.Component`**를 상속받도록 구현해야 합니다. 상속 시 해당 클래스형 컴포넌트에서 **`render()`** 메소드가 구현되어야 하는데 HTML을 반환해주면 됩니다. 아래는 위의 함수형 컴포넌트와 동일한 기능을 합니다.

```
class Introduce extends React.Component {
  render() {
    return <h2>Hi, I am elice!</h2>;
  }
}

ReactDOM.render(<Introduce />, document.getElementById('root'));

```

### **언제 사용하나요?**

함수형 컴포넌트와 클래스형 컴포넌트가 언제 사용되는지 알아볼까요? 함수형 컴포넌트는 단순히 HTML UI를 반환하는 간단한 자바스크림트 함수로 자주 사용됩니다. 단순히 데이터를 받고 렌더링을 하면 끝이기 때문에 **비상태형 컴포넌트**라고도 합니다.

즉, 상태를 사용하지 않고 함수에 대한 결과를 반환하는데, 여기서 상태란 React의 State를 의미하며 컴포넌트의 렌더링 결과물에 영향을 주는 데이터를 갖고 있는 객체입니다. 쉽게 말하자면 컴포넌트의 현재 저장된 값이 State라고 보시면 됩니다.

클래스형 컴포넌트는 이러한 논리와 상태를 구현할 때 사용되어 **상태형 컴포넌트**라고 합니다. HTML을 반환하는 **`render()`** 메소드가 구현되어, 복잡한 UI 로직을 구현할 때 클래스형 컴포넌트가 사용됩니다. 특히 위에서 언급한 State를 사용할 때 반드시 클래스형 컴포넌트로 구현이 되어야 합니다.

## **DOM 태그**

컴포넌트 렌더링 시 넘겨주었던 **`<함수 혹은 클래스 이름 />`**은 아래와 같은 엘리먼트를 만들어서 렌더링 시 넘겨줘도 괜찮습니다. 해당 태그를 DOM 태그라고 합니다.

```
const element = <Introduce />;

```

이러한 DOM 태그를 아래처럼 정의할 수도 있습니다. **`name`**을 엘리먼트에서 함께 넘겨주고 함수형 컴포넌트에서 **`props`**를 이용해 넘겨준 **`name`**을 받을 수 있습니다. **`props`**가 메소드의 매개변수 역할을 한다고 생각하면 됩니다. **`props`**에 관한 자세한 사항은 해당 이론 마지막에 추가로 설명하겠습니다.

```
function Introduce(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Introduce name="Elice" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```