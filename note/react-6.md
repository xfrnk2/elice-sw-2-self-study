## **Form 개발하기**

React를 이용해 사용자로부터 데이터를 입력받아 처리하기 위한 관문인 **Form**을 개발해봅니다.

이번 실습에서는 **`State`**와 **`이벤트`**를 활용해 개발을 진행하게 됩니다.

제작할 **Form**의 형태는 다음과 같습니다.

1. 컴포넌트 형태로 개발합니다.
2. **Form** 컴포넌트 내부에서 State를 이용해 사용자의 입력을 저장/관리합니다.
3. **Form**의 **`Submit`** 이벤트가 발생되면 부모 컴포넌트로 그 데이터를 전달합니다.

자 그럼 지시사항에 따라 함께 **Form**을 개발해봅시다.

## **지시사항**

1. **`src/components`** 디렉토리를 생성하고 **`InsertForm.js`** 파일을 만듭니다.
2. 생성한 파일에 **`InsertForm`** 함수 컴포넌트를 작성합니다. 이 컴포넌트는 **`onInsert`** 라는 **`이벤트 핸들링 함수`**를 Props로 전달받습니다.
3. **`InsertForm`**은 아래와 같은 JSX Element를 반환합니다.
    
    ```
    <form>
      <input /><button>등록</button>
    </form>
    Copy
    ```
    
4. **`inputValue`** 라는 이름의 **`state`**를 선언하고 생성한 **`input`** element에 **`value`**를 해당 state로 설정하고 **`onChange`** 이벤트를 이용해 사용자의 입력을 받아 state를 변경할 수 있도록 합니다.
5. **`form`** element의 **`submit`** 이벤트 핸들링 함수를 작성합니다. **`submit`** 이벤트 핸들링 함수가 호출될 때 **`inputValue`** 값을 매개변수로 하여 props로부터 전달받은 **`onInsert`** 함수를 호출해주도록 합니다.또한 **`inputValue`**를 **`""`**로 초기화 해줍니다.

**주의사항**: form의 **`onSubmit`** 호출 시 **`event.preventDefault()`**를 호출해 HTML의 기본 form 동작이 일어나지 않도록 합니다.

1. **`App.js`**로 돌아와 작성한 **`InsertForm`**을 import하고 **`onInsert`** 이벤트에 **`console.log`**를 이용해 할일 등록 시 값이 잘 전달되는지 확인해봅시다.

### 나의 코드

App.js

```jsx
import React from 'react';
import InsertForm from './components/InsertForm';

function App() {
  return (
    <div className="App">
        <InsertForm onInsert={(value) => {
            console.log(value);
        }}/>
    </div>
  );
}

export default App;

```

components/InsertForm.js

```jsx

import React, { useState } from "react";

const InsertForm = ({ onInsert }) => {
    const [inputValue, setInputValue] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        if (typeof onInsert === "function")
        {onInsert(inputValue);
        }
        
        setInputValue("");
    }
    return <form onSubmit={handleSubmit}>
    <input value={inputValue} onChange={(event) => {
        setInputValue(event.target.value);
    }} />
    <button type="submit">등록</button>
    </form>
}

export default InsertForm;
```

## **Hook이란?**

Hook은 기존 함수형 컴포넌트에서도 클래스형 컴포넌트의 기능을 사용할 수 있게 하는 기능입니다. 즉, 함수형 컴포넌트에서 React state와 생명주기 기능(lifecycle features)을 **연동(hook into)** 할 수 있게 해주는 것이 바로 Hook입니다.

### **왜 사용하나요?**

기존의 React에서는 다음과 같은 문제점이 있었습니다.

- 컴포넌트 사이에서 상태와 관련된 로직을 재사용하기 어렵습니다.
- 복잡한 컴포넌트들은 이해하기 어렵습니다.
- 클래스는 사람과 기계를 혼동시켰습니다. 즉, 클래스는 코드의 재사용성과 코드 구성을 좀 더 어렵게 만들 뿐만 아니라, React를 배우는데 큰 진입장벽이었습니다. 예를 들어 **`this`**가 자바스크립트에서 어떻게 작동하는지 알아야만하는데 이는 대부분의 다른 언어(파이썬 등)와는 다르게 작동합니다.

React 16.8에서 Hook이 나오기 전에는 컴포넌트를 사용하던 중 state를 추가하고 싶을 때 클래스 컴포넌트로 바꾸곤 했을 겁니다. 이제 Hook을 사용하면서 손쉽게 함수형 컴포넌트로도 state를 사용할 수 있습니다! 즉, 클래스 없이 React를 사용할 수 있게 해주는 것입니다.

> 물론 그렇다고 클래스형 컴포넌트가 사라지는 것은 아닙니다! 리액트는 기존에 사용하던 것들의 하위 호환성을 중요시하기 때문에 앞으로 클래스에 대한 업데이트도 염두에 둔다고 합니다.
> 

### **Hook의 장점**

React Hooks의 장점과 사용해야 하는 이유를 요약해보자면 이렇습니다.

- **컴포넌트의 함수가 많아질 때 클래스 구성 요소로 리팩토링할 필요가 없습니다.**일반적으로 React 컴포넌트가 함수 컴포넌트로 시작하는 경우가 있는데, 함수 컴포넌트에서 클래스 컴포넌트로 변경하려면 컴포넌트 요소가 얼마나 복잡한지에 따라 약간의 [리팩토링](https://ko.wikipedia.org/wiki/%EB%A6%AC%ED%8C%A9%ED%84%B0%EB%A7%81)이 필요합니다. React hooks를 사용하면 함수 구성 요소로만 상태 관리를 할 수 있기 때문에 리팩토링 노력이 최소화됩니다.
- **UI에서 로직을 더 쉽게 분리하여 두 가지 모두 재사용 가능합니다.**Hook 및 UI를 사용하면 분리하기가 더 쉽습니다. 즉 코드를 재사용하기 위한 로직을 쉽게 만들 수 있습니다. Hook은 더 적은 상용구와 더 직관적인 UI 및 논리 구성으로 더 세련되게 구현할 수 있습니다. 코드의 재사용은 전체적으로 작성해야 할 코드의 양을 줄어들게 합니다. 전체적인 코드의 양이 줄어들면 코드의 가독성 또한 좋아집니다.
- **기존의 코드를 다시 작성할 필요 없이 일부의 컴포넌트들 안에서 Hook을 사용할 수 있습니다.**Hook이 등장했다고 해서 기존의 모든 코드를 다시 작성해야 하는 것은 아닙니다. 기존의 코드와 잘 호환이 되기 때문에 필요한 곳에서 Hook을 사용하면 됩니다.
- **Hook을 사용하면 컴포넌트로부터 상태 관련 로직을 추상화가 가능합니다.**Hook을 이용하면 컴포넌트별로 독립적인 테스트와 재사용이 가능합니다. Hook은 컴포넌트 간 계층 변화 없이 상태 관련 로직을 재사용할 수 있도록 도와줍니다.

### **Hook의 종류**

Hook의 종류로는 State Hook과 Effect Hook 두 가지가 있습니다. 다음 이론 설명부터 이 둘에 대해 간단한 소개를 드릴 예정입니다. 다만 자세한 사용 방법은 Hook 개요에 대한 설명을 마친 후 알아볼 예정이니 이번 장에서는 Hook의 종류가 두 가지가 있고 그 두 가지가 무엇인지만 이해하시면 됩니다!

---

## **State Hook이란?**

Hook이 나오기 전에는 컴포넌트의 상태 관리를 하려면 클래스 기반 React 컴포넌트를 작성해야 했습니다. 대표적으로 상태 관리가 필요한 경우인 사용자 입력을 위한 컴포넌트를 작성한다고 생각해보겠습니다.

아래 예제 코드는 사용자의 ID와 이메일을 입력받기 위한 전형적인 React 컴포넌트입니다. 클래스 컴포넌트의 **`this.state`** 필드에 **`userID`**와 **`email`** 값을 저장해두고 사용자가 이 값을 변경할 때마다 값이 갱신되고 다시 화면에 반영이 됩니다.

```
import React, { Component } from 'react';

class UserFormClass extends Component {
    state =  { userID: "", email: "" }
    handleClick = ({ target: { name, value }  }) => {
        this.setState({ [name]: value })
        }
        render() {
            const { userID, email } = this.state
            return (
                    <>
                      <label>
                      userID:
                        <input
                           type="text"
                           name="userID"
                           value={userID}
                           onChange={this.handleClick}
                         />
                      </label>
                      <label>
                      userID:
                        <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={this.handleClick}
                         />
                      </label>
                    </>
            )
        }
}

```

이렇게 간단한 상태 관리조차도 클래스 기반 컴포넌트로 작성해야 한다는 점에 대해서 불편했었습니다. 클래스 기반 컴포넌트는 함수 기반 컴포넌트보다 복잡하고 따라서 오류가 발생하기 쉽고 유지 보수가 힘들기 때문입니다.

하지만 State Hook의 **`useState()`**를 사용하면 함수형 컴포넌트에서 이를 간단히 사용할 수 있습니다. 아래와 같은 문법을 이용하면 위의 예시에 등장한 **`userID`**나 **`email`** 같은 state를 함수형 컴포넌트가 사용 가능합니다.

```
const [<상태 값 저장 변수>, <상태 값 갱신 함수>] = userState(<상태 초깃값>);

```

이렇게 **`useState()`** 함수를 사용하여 클래스 기반 컴포넌트를 함수 기반으로 작성하면 컴포넌트 상태를 관리하기 위한 코드 역시 매우 간단해집니다. **`useState()`** 함수는 배열을 리턴하는데 첫 번째 원소는 상태 값을 저장할 변수이고 두 번째 원소는 해당 상태 값을 갱신할 때 사용할 수 있는 함수입니다. **`useState()`** 함수에 인자로 해당 상태의 초깃값을 넘길 수 있습니다.

> State Hook이 등장한 이후 이미 짜놓은 컴포넌트를 모조리 재작성하는 것은 권장하지 않지만 새로 작성하는 컴포넌트부터는 Hook을 이용하는 것이 권장되고 있습니다!
> 

---

## **Effect Hook이란?**

State Hook에서 **`useState()`**로 함수형 컴포넌트에서 상태 값을 알 수 있었습니다. 이번에는 Hook의 또 다른 종류인 Effect Hook과 **`useEffect()`**에 대해 알아봅시다. **`useEffect()`**는 단어에서 알 수 있듯이 함수형 컴포넌트에서 side effects들을 실행하는 것입니다.

React 컴포넌트 안에서 데이터를 가져오거나 구독하고, DOM을 직접 조작하는 작업을 이전에도 종종 해보셨을 것입니다. 우리는 이런 모든 동작을 “side effects”(또는 짧게 “effects”)라고 합니다. 쉽게 말해 함수(React의 함수형 컴포넌트) 외부에서 로컬의 상태 값을 변경하는 것을 말합니다. 이러한 과정은 다른 컴포넌트에 영향을 줄 수도 있어 렌더링 과정에서는 구현할 수 없는 작업입니다.

Effect Hook의 **`useEffect()`**는 함수형 컴포넌트 내에서 이런 side effects를 수행할 수 있게 해줍니다. 간단한 카운터 예제와 함께 살펴보겠습니다.

React 클래스의 생명주기 메소드인 **`componentDidMount()`** 나 **`componentDidUpdate()`**는 로직이 분리되어 있습니다. 따라서 버튼 클릭 때마다 1씩 count를 하는 카운터 컴포넌트에서 매 렌더링 시에도 count를 갱신하고 State가 업데이트될 때에도 count를 갱신하고 싶다면 두 메소드를 동시에 사용해야 합니다.

생명주기 메소드를 사용하는 대신 **`useEffect()`**를 이용한다면 쉽게 구현할 수 있습니다.

```
import React, { useState, useEffect }  from 'react';

const Example = () = > {
    const [count, setCount] = useState(0);

    useEffect() => {
     documen.title = 'You checked ${count} times';

     });

 return (
     <div>
        <p> You clicked {count} times </p>
        <button onClick={() => setCount(count + 1)}> Click Me</button>
    </div>
 );
};
export default Example;

```

**`useEffect()`**를 사용하는 방법은 위 코드처럼 내가 원하는 effects(여기서는 **`document.title`**을 바꾸는 것)를 동작해줄 함수 **`useEffect()`**를 작성해주면 되는 것입니다. 타이틀 바꾸는 것 외에도 필수적인 API를 불러오거나 데이터를 가져올 때도 사용 할 수 있습니다. **`useEffect()`**를 사용하면 모든 렌더링하는 요소마다 원하는 작업을 수행할 수 있어 코드를 중복할 필요가 없습니다.

> 위에서 언급한”필수적인 API를 불러오거나 데이터를 가져올 때”는 쉽게 말해 프론트엔드에서 백엔드의 데이터를 사용하는 데 필요한 과정을 말합니다. 이러한 과정을 원래는 컴포넌트의 생명주기마다 구현해주어야 했는데, Effect Hook이 이를 간단하게 해준 것입니다!
> 

---

## **Hook의 규칙**

자바스크립트의 함수인 Hook을 사용하기 위한 두 가지 큰 규칙에 대해 알아봅시다.

### **1. 최상위(at the Top Level)에서만 Hook을 호출해야 합니다.**

반복문(while), 조건문 (if) 혹은 중첩된 함수 내에 Hook을 호출하면 안 됩니다. Hook은 렌더링 시 항상 동일한 순서로 호출이 되어야 하며 그렇지 않을 경우 버그가 발생합니다.

따라서 React가 **`useState()`**와 **`useEffect()`**가 여러 번 호출되는 중에도 Hook의 상태를 올바르게 유지할 수 있도록 해줘야 합니다. Hook은 React 함수의 최상위(at the top level)에서 호출되는 규칙을 따르면 컴포넌트가 렌더링 될 때마다 항상 동일한 순서로 Hook이 호출되는 것이 보장할 수 있습니다.

### **2. 오직 React 함수 내에서 Hook을 호출해야 합니다.**

Hook을 일반적인 자바스크립트 함수에서 호출하면 안 됩니다. Hook은 아래에 설명된 곳에서만 호출할 수 있습니다.

- React 함수 컴포넌트에서 Hook을 호출할 수 있습니다.
- 나만의 Hook에서 Hook을 호출할 수 있습니다.

이 규칙을 지켜야만 컴포넌트의 모든 상태 관련 로직을 소스 코드에서 명확하게 볼 수 있습니다.

### **규칙을 지켜야 하는 이유**

Hook 사용 규칙을 지키지 않으면 어떠한 일이 일어나는지 알아봅시다.

```
// 조건문 안에서 Hook을 사용함으로써 1번 규칙을 깼습니다.if (name !== '') {
    useEffect(function persistForm() {
      localStorage.setItem('formData', name);
    });
  }

```

**`name !== ''`** 조건은 첫 번째 렌더링에서 참이기 때문에 Hook은 동작합니다. 하지만 사용자가 그다음 렌더링에서 폼을 초기화하면서 조건을 거짓으로 만들 수 있습니다. 렌더링 간에 Hook을 건너뛰기 때문에 Hook 호출 순서는 달라집니다. (변경된 **`name`**을 Hook에서 알 수가 없게 됩니다)

React의 특정 state가 어떤 **`useState()`**에서 호출되었는지 알 수 있는 이유는 React가 Hook이 호출되는 순서에 의존하기 때문입니다. 즉, 모든 렌더링에서 Hook의 호출 순서는 같아서 Hook이 올바르게 동작할 수 있는 것입니다.

하지만 Hook을 조건문 안에서 호출한다면 Hook을 건너뛰는 경우가 생길 수 있고 Hook을 호출하는 순서가 달라집니다. 이에 따라 건너뛴 Hook 다음에 호출되는 Hook의 순서가 하나씩 밀리면서 버그를 발생시킵니다. 이것이 컴포넌트 최상위에서만 Hook을 호출하는 이유입니다.

만약 조건부로 side effect를 실행하길 원한다면, 조건문을 Hook 내부에 넣으면 됩니다.

```
useEffect(function persistForm() {
// 더 이상 규칙을 어기지 않습니다.if (name !== '') {
      localStorage.setItem('formData', name);
    }
  });
```

---

### State와 같은 기능을 하는 클래스

```jsx
import React, { useState } from "react";
import "./App.css";

class App extends React.Component {

  constructor(props) {
    super(props);
    // count의 state를 0으로 설정하세요.
      this.state = {count: 0};
  }

  render() {
    return (
      <div>
        {/* count의 state를 출력하세요. */}
        <p>You clicked {this.state.count} times</p>
        {/* setState()를 이용해 버튼 클릭 시 count가 1 증가하는 코드를 작성하세요. */}
        <button onClick={() => {
        
        this.setState({count: this.state.count + 1})} 
        
        }>
          Click me
        </button>
      </div>
    );
  }
}

export default App;
```

---

## **정리가 필요한 함수형 컴포넌트**

마지막으로 정리가 필요한 함수형 컴포넌트에 대해 알아봅시다. 클래스형 컴포넌트에서 **`componentWillUnmount()`** 메소드를 통해 실행하던 코드를 **`useEffect`**를 이용해 실행해야 합니다.

이때 정리가 필요한 컴포넌트는 아래처럼 **`useEffect`** 내 함수의 반환을 통해 구현합니다. Mounting과 Updating 시 실행할 코드는 구현한 함수 위에 작성해주면 됩니다.

```
useEffect(() => {
// Mounting 및 Updating 시 실행할 코드return function 함수명() {
// Unmounting 시 실행할 코드
    }
});
Copy
```

이렇게 함으로써 생명주기 메소드를 함수형 컴포넌트 한 곳에서 관리할 수 있습니다.

컴포넌트가 정리될 때, 즉 Unmounting 되는 시점에 **`useEffect`**에서 메소드가 반환되는 것을 실습을 통해 알아봅시다.

## **지시사항**

1. **`Child`** 컴포넌트에서 **`useEffect()`**를 화살표 함수로 생성하고 **`텍스트가 제거 되었습니다!`** 경고창을 띄우도록 함수를 만들어 반환하세요.

**출력 결과**

![https://elice-api-cdn.azureedge.net/api-attachment/attachment/837552f7ad754f37a032b7dbe5bfdc10/image.png](https://elice-api-cdn.azureedge.net/api-attachment/attachment/837552f7ad754f37a032b7dbe5bfdc10/image.png)

### **Tips!**

- **`useEffect`**에서 반환되는 함수명은 자유롭게 설정해도 됩니다. 이름이 없는 화살표 함수를 반환해도 괜찮습니다.

### 나의 코드

```jsx
import "./App.css";
import React, { useState, useEffect } from "react";

function Child() {
  // useEffect() 내 경고 문구를 출력하는 cleanup() 메소드를 반환하세요.
    useEffect(() => {
        // Mounting 및 Updating 시 실행할 코드
        return function cleanup() {
            alert("텍스트가 제거 되었습니다!")
          // Unmounting 시 실행할 코드
        }
    });
  return <p>버튼을 클릭해 해당 텍스트를 제거하세요.</p>;
}

function App() {
  const [show, setShow] = useState(true);

  let myheader;
  if (show) {
    myheader = <Child />;
  }

  return (
    <div>
      {myheader}
      <button onClick={() => setShow(false)}>버튼</button>
    </div>
  );
}

export default App;
```

```jsx
import "./App.css";
import rabbit from './img/rabbit.png'
import React, { useState, useEffect } from "react";

function HideAndSeek() {
  // 지시사항에 따라 코드를 작성하세요.
    useEffect(() => {
        alert("토끼를 찾았습니다!")
        return () => {
            alert("토끼가 숨었습니다.")
        }
    })
  return "토끼 등장";
}

function App() {
  const [mounted, setMounted] = useState(true);

  const toggle = () => setMounted(!mounted);
  let find_rabbit;
  let print_img;
  if (mounted) {
    find_rabbit = <HideAndSeek />;
    print_img = <img src={rabbit} />;
  } else {
    print_img = null;
  }
  return (
    <div>
      <button onClick={toggle}>숨기/찾기</button>
      <br />
      {find_rabbit}
      {print_img}
    </div>
  );
}

export default App;
```

### Object 내부에 있는 값 바꾸기