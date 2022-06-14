## **논리 연산자 (&&) 활용**

논리연산자 (**`&&`**)를 사용하여 if문을 한줄로 표현할 수 있습니다. 논리연산자는 다음과 같은 결과값을 반환하는 연산자입니다.

- **`expr1 && expr2`** : expr1이 true값을 반환할 수 있으면 expr2를 반환하고, 그렇지 않으면 expr1을 반환합니다.
- **`true && expr`**: expr을 반환합니다.
- **`false && expr`**: false를 반환합니다.

```jsx
function Mailbox(props) {
  const message = props.message;
  return (
    <div>
      <h1>Hello!</h1>
      {message.length > 0 &&
        <h2>
          You have {message.length} unread messages.
        </h2>
      }
    </div>
  );
}
```

## **조건부 연산자 (?) 활용**

조건부 연산자 (**`?`**)를 사용하여 if-else문을 한줄로 표현할 수 있습니다. 조건부 연산자는 다음과 같은 결과를 반환하는 연산자입니다.

```
(조건) ? expr1 : expr2
Copy
```

- 조건의 결과값이 true인 경우: expr1을 실행합니다.
- 조건의 결과값이 false인 경우: expr2를 실행합니다.

**예시**

```
  let [isLoggedIn, setIsLoggedIn] = useState(false);
    ...
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}
Copy
```

**`isLoggedIn`**의 값이 true라면, ‘currently’문자열을 출력합니다.

**`isLoggedIn`**의 값이 false라면, ‘not’문자열을 출력합니다.

### Effect hook

- 반드시 함수 컴포넌트 내에서 사용되어야 한다.

```jsx
// count 가 증가할 때마다 콘솔에 출력해주는 예시
const App = () => {
    const [count, setCount] = useState(0);
    useEffect(() => { 
        console.log(count);
    }, [count]);
    return <button onClick={() => {
        setCount(current => {
            return current + 1;
        });
    }}>
        카운트 증가
    </button>
}
```

## **Effect Hook 2**

지난 실습에서 **`Effect Hook`**을 이용하면 컴포넌트 내의 State나 Props의 변화를 감지해 원하는 로직을 실행할 수 있다는 점을 배워보았는데요,이어서 **`Effect Hook`**을 응용해 개발하는 방법을 알아보겠습니다.

**`Effect Hook`**을 이용하면 컴포넌트가 생성됐을 때, 컴포넌트가 소멸될 때를 감지해서 특정 로직을 실행할 수 있습니다.

**`Effect Hook`**으로 컴포넌트의 생성/소멸 시의 로직을 작성하는 방법은 다음과 같습니다.

### **예시**

```
const App = () => {

    useEffect(() => {
        console.log("컴포넌트 생성");

        return () => {
            console.log("컴포넌트 소멸");
        }
    }, []);
    return <div></div>
}
Copy
```

위의 코드를 보면 **`useEffect`**의 두 번째 매개변수인 **`Deps`**에 빈 배열을 넣어주었습니다. 이 때는 오직 컴포넌트의 생성과 소멸 시에만 **`Effect Callback`** 함수가 호출되게 됩니다.

또한 **`Effect Callback`** 함수 내에서 return 해주는 또다른 함수가 Effect의 종료 시에 호출되기 때문에 이는 곧 컴포넌트의 소멸 단계에 호출이 되는 함수라고 할 수 있겠습니다.

### 예시

components/Greeting.js

```jsx
import React, { useEffect } from "react";

const Greeting = () => {

useEffect(() => {
    console.log("컴포넌트가 생성되었습니다.");
    return () => {
        console.log("컴포넌트가 소멸되었습니다.");
    }
}, []);

    return (
    <h1>안녕하세요.</h1>
    )
}
export default Greeting;
```

App.js

```jsx
import React, { useState } from 'react';
import Greeting from './components/Greeting';

function App() {
  const [ isCreated, setIsCreated] = useState(false);
  return (
    <div className="App">
    <button onClick={() => {
    setIsCreated((current) => {
        return !current;
    })
    
    }}>컴포넌트 생성/제거</button>
    {isCreated && <Greeting />}
    </div>
  );
}

export default App;
```

## 아래에 소개될 hook을 짧게 요약

## **useMemo**

useMemo를 이용해 지정한 State나 Props가 변경될 경우 해당 값을 활용해 **계산된 값**을 **메모이제이션**하여 재렌더링 시 불필요한 연산을 줄입니다.

## **useCallback**

useCallback은 함수를 메모이제이션하기 위해 사용하는 Hook입니다. 컴포넌트가 재 렌더링될 때 불필요하게 함수가 다시 생성되는 것을 방지합니다.

**참고**: **`js useMemo(() => fn, deps)`** 와 **`useCallback(fn, deps)`** 는 같습니다.

## **useRef**

useRef는 컴포넌트 생애 주기 내에서 유지할 ref 객체를 반환합니다.

ref 객체는 .current라는 프로퍼티를 가지며 이 값을 자유롭게 변경할 수 있습니다.

일반적으로 React에서 DOM Element에 접근할 때 사용합니다(DOM Element의 ref 속성을 이용합니다.).

useRef에 의해 반환된 ref 객체가 변경되어도 컴포넌트가 재 렌더링되지 않습니다.

---

## **useMemo**

useMemo를 이용해 지정한 State나 Props가 변경될 경우 해당 값을 활용해 **계산된 값**을 **메모이제이션**하여 재렌더링 시 불필요한 연산을 줄입니다.

### **예시**

```
const App = () => {
  const [firstName, setFirstName] = useState('철수')
  const [lastName, setLastName] = useState('김')

// 이름과 성이 바뀔 때마다 풀네임을 메모이제이션const fullName = useMemo(() => {
    return ′${firstName} ${lastName}′
  }, [firstName, lastName])
}
Copy
```

useMemo를 사용해 메모이제이션을 했을 경우와 하지 않았을 때의 차이도 알아봅시다.

다음 예시는 임의로 복잡한 연산을 수행하는 상황을 가정하기 위해 작성된 코드입니다.

### **useMemo를 사용하지 않았을 때**

```
const App = () => {
  const [value, setValue] = useState(1)

  const something = (() => {
        let sum = 0;
        for(let i = 0; i < 999999999; i++) {
            sum += i;
        }
    })()

    return (
        <div>
            <button onClick={() => {
                setValue((current) => {
                    return current + 1;
                })
            }}>
                {value}
            </button>
            <div>{something}</div>
        </div>
    )
}
Copy
```

위 코드를 복사 붙여넣기한 후 실행해보세요.**`value`** state의 변경이 일어나며 컴포넌트가 다시 렌더링되는 과정에서 부하가 발생하는 것을 보실 수 있습니다.

동일한 코드를 **`useMemo`**를 이용해 작성해보겠습니다.

### **useMemo를 사용했을 때**

```
const App = () => {
  const [value, setValue] = useState(1)

  const something = useMemo(() => {
        let sum = 0;
        for(let i = 0; i < 999999999; i++) {
            sum += i;
        }
        return sum;
    }, []);

    return (
        <div>
            <button onClick={() => {
                setValue((current) => {
                    return current + 1;
                })
            }}>
                {value}
            </button>
            <div>{something}</div>
        </div>
    )
}
Copy
```

위 코드도 한번 실행해보시기 바랍니다.컴포넌트의 재 렌더링이 일어날 때마다 차이가 명확하게 느껴질 것입니다.

추가로, useMemo의 연산은 렌더링 단계에서 이루어지기 때문에 렌더링 과정과 무관하게 시간이 **오래 걸리는 로직을 작성하지 않는 것이 권장**됩니다.

그럼 코드 작성을 통해 useMemo를 사용하는 방법을 알아봅시다.이번 실습에서는 두 개의 숫자 state가 변경될 때마다 자동으로 숫자들의 곱을 메모이제이션하는 코드를 작성해봅니다.

## **지시사항**

1. **`App.js`**의 **`App`** 컴포넌트에 **`foo`**와 **`bar`** state를 선언합니다. 초기값은 두 state 모두 **`0`**입니다.
2. **`className`**이 **`"App"`**인 div 내부에 **`<input>`** element를 두 개 생성하고 각각 **`foo`** state와 **`bar`** state를 변경할 수 있도록 **`value`**와 **`onChange`**를 설정합니다.
    
    **주의사항**: **`onChange`** 이벤트에서 setState를 할 때 **`parseInt`**를 이용해 **`string`**을 **`number`**로 변환하도록 합니다.**예시**
    
    ```
    setFoo(parseInt(event.target.value));
    Copy
    ```
    
3. **`두 개의 state를 선언한 코드`**와 **`return`** 사이에 **`useMemo`**를 이용하여 **`multi`** 변수를 생성합니다. **`multi`**는 **`foo`**와 **`bar`**의 **곱**을 **메모이제이션** 한 값입니다.
4. 생성한 두 개의 **`input`** element 아래에 **`<div>`** element를 생성하고 내부에 **`multi`** 값을 출력합니다.
5. 코드를 실행하여 확인해봅니다. **`input`** element의 숫자를 자유롭게 변경해보세요!

### 내가 작성한 코드

```jsx
import React, {useState, useMemo } from 'react';

function App() {
  const [foo, setFoo] = useState(0);
  const [bar, setBar] = useState(0);
  const multi = useMemo(() => {
    return foo * bar;
  }, [foo, bar])
  
  return (
    <div className="App">
      <input value={foo} onChange={(event) => {
        setFoo(parseInt(event.target.value));
      }} />
      <input value={bar} onChange={(event) => {
        setBar(parseInt(event.target.value));
      }} />
      <div>{multi}</div>
    </div>
  );
}

export default App;
```

## **useCallback**

useCallback은 함수를 메모이제이션하기 위해 사용하는 Hook입니다. 컴포넌트가 재 렌더링될 때 불필요하게 함수가 다시 생성되는 것을 방지합니다.

**참고**: **`js useMemo(() => fn, deps)`** 와 **`useCallback(fn, deps)`** 는 같습니다.

### **예시**

```
const App = () => {
  const [firstName, setFirstName] = useState('철수')
  const [lastName, setLastName] = useState('김')

// 이름과 성이 바뀔 때마다// 풀네임을 return하는 함수를 메모이제이션const getFullName = useCallback(() => {
    return `${firstName} ${lastName}`
  }, [firstName, lastName])

  return <>{getFullName()}</>
}
Copy
```

이제 직접 **`useCallback`**을 사용하여 코드를 작성해봅시다.

## **지시사항**

1. **`App.js`** 파일 내의 **`App`** 컴포넌트에 **`foo`**, **`bar`** state를 선언합니다. 두 state 모두 **`number`**이며 초기값은 **`0`**입니다.
2. **`useCallback`**을 이용해 **`foo`**, **`bar`** state가 변경될 때마다 **`foo + bar`**를 연산하여 **`return`** 해주는 함수를 **메모이제이션**합니다. 메모이제이션된 함수의 이름은 **`calc`** 입니다.
3. **`className`**이 **`"App"`**인 **`div`** element 내부에 **`<input>`** element 두 개를 삽입하고 **`foo`**와 **`bar`** state를 각각 변경할 수 있도록 **`value`**와 **`onChange`** 이벤트를 작성하세요.
    
    **주의사항**: **`onChange`** 이벤트에서 setState를 할 때 **`parseInt`**를 이용해 **`string`**을 **`number`**로 변환하도록 합니다.**예시**
    
    ```
    setFoo(parseInt(event.target.value));
    Copy
    ```
    
4. 생성한 두 개의 **`input`** element 아래에 **`<div>`** element를 생성하고 내부에 **`calc()`** 값을 출력합니다.
5. 코드를 실행하여 확인해봅니다. **`input`** element의 숫자를 자유롭게 변경해보세요!

### 내가 작성한 코드

```jsx
import React, { useState, useCallback } from 'react';

function App() {
  const [foo, setFoo] = useState(0);
  const [bar, setBar] = useState(0);
  const calc = useCallback(() => {return foo + bar}, [foo, bar]);
  
  return (
    <div className="App">
      <input value={foo} onChange={
      (e) => {setFoo(parseInt(e.target.value))
      }} />
      <input value={bar} onChange={
      (e) => { setBar(parseInt(e.target.value))
      }} />
      <div>
      {calc()}
      </div>
    </div>
  );
}

export default App;
```

## **useRef**

useRef는 컴포넌트 생애 주기 내에서 유지할 ref 객체를 반환합니다.

ref 객체는 .current라는 프로퍼티를 가지며 이 값을 자유롭게 변경할 수 있습니다.

일반적으로 React에서 DOM Element에 접근할 때 사용합니다(DOM Element의 ref 속성을 이용합니다.).

useRef에 의해 반환된 ref 객체가 변경되어도 컴포넌트가 재 렌더링되지 않습니다.

(event.target과 동일)

### **예시**

```
const App = () => {
  const inputRef = useRef(null)
  const onButtonClick = () => {
    inputRef.current.focus()
  }
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={onButtonClick}>
        input으로 포커스
      </button>
    </div>
  )
}
Copy
```

이제 직접 **`useRef`**를 활용해봅시다.이번 실습에서는 **`input`** element에 접근하여 입력된 **`value`** 값을 **`alert`**를 이용해 출력해보는 코드를 작성합니다.

## **지시사항**

1. **`App.js`** 파일 내의 **`App`** 컴포넌트 내에 **`useRef`**를 이용해 **`ref`** object를 선언합니다. 반환된 **`ref`** object를 담을 변수명은 **`inputRef`**입니다.
2. **`className`**이 **`"App"`**인 div 내에 **`<input>`** element를 생성하고 **`ref`** attribute를 **`inputRef`**로 설정합니다.
3. 생성한 **`input`** element 하단에 **`<button>`** element를 생성하고 **`onClick`** 이벤트 발생 시 생성한 **`input`** element의 value를 **`alert`**를 이용해 출력합니다.**`inputRef`**로부터 **`value`**를 가져오는 코드는 다음과 같습니다.
    
    ```
    inputRef.current.value
    Copy
    ```
    
4. 작성한 코드를 실행하고 **`input`**에 값을 입력한 뒤 **`button`**을 클릭하여 결과를 확인해보세요.

## 내가 작성한 코드

```jsx
import React, { useRef } from 'react';

function App() {
  const inputRef = useRef();
  
  
  return (
    <div className="App">
    <input ref={inputRef} />
    <button onClick={() => {
        alert(inputRef.current.value);
    }}>클릭</button>
    </div>
  );
}

export default App;
```

## 나만의 훅 만들기

hooks/useToggle.js

```jsx
import React, { useState } from 'react';

function useToggle(initialValue) {
    const [isOn, setIsOn] = useState(initialValue);
    function toggle () {
        setIsOn((current) => { return !current;})
    }
    
    return { isOn, toggle }
}

export default useToggle;
```

App.js