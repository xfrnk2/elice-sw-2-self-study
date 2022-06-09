# 학습 자료집 1

# 코드 리포트

## **Github 사용자가 약 40만 명의 사용자에게 6천만 통이 넘는 알림 메일을 발송**

[https://news.hada.io/topic?id=6698](https://news.hada.io/topic?id=6698)

- 한 사용자가 [EpicGames/Signup](https://github.com/EpicGames/Signup) 저장소에서 아주 단순한 변경 사항을 포함한 [PR을 생성](https://github.com/EpicGames/Signup/pull/24)하고 [@EpicGames/developers](https://github.com/orgs/EpicGames/teams/developers)에게 맨션.
    - @EpicGames/developers는 UnrealEngine을 사용하기 위해 가입해야 하는 조직으로, 약 40만 명의 사용자가 등록되어 있음.
    - 맨션으로 인해 해당 PR을 40만 명이 구독한 상태가 됨.
- 이후 관리자가 PR를 닫을 때까지 2시간 동안 백 개가 넘는 댓글이 달렸으며, 1인당 약 150통, 총합 6천만 통이 넘는 메일이 발송되었음.
    - 메일은 몇 시간에 걸쳐 지연 발송됨.
- 다른 유저가 [한 번 더 동일한 일](https://github.com/EpicGames/Signup/pull/26)을 시도하였으며, 관리자가 빠르게 대응하여 약 10통의 메일(총합 400만 통)이 발송되고 끝남.
- EpicGames에서는 임시로 모든 PR을 자동으로 닫는 [기능을 구현](https://github.com/EpicGames/Signup/pull/29)하고, 향후 스팸 방지를 위해 Github와 협력 중이라고 밝힘.

## **Apple, iOS 16 공개**

[https://news.hada.io/topic?id=6693](https://news.hada.io/topic?id=6693)

[https://www.apple.com/macbook-air-m2/](https://www.apple.com/macbook-air-m2/)

## **Apple, M2칩을 장착한 맥북에어와 맥북프로13 공개**

[https://news.hada.io/topic?id=6690](https://news.hada.io/topic?id=6690)

[MacBook Air with M2 chip](https://www.apple.com/macbook-air-m2/)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b03d24a4-84f7-43e9-9b34-c2e59ab81e8b/Untitled.png)

---

# 복습

## Component

### Class Component

```jsx
import React, {Component} from 'react';

class Car extends Component {
  render() {
    return <h2>Hello!</h2>;
  }
}

export default App;
```

- class를 써서 Component로 상속을 받아야 한다
- render() 메소드가 있어야 함
- state, lifeCycle 기능 사용 가능
- 메모리 자원을 함수형보다 조금 더 사용함

### Function Component

```jsx
import React from 'react';

function Car() {
	return <h2>Hello!</h2>
}

export default App;
```

- state, lifeCycle이 Hooks로 대체됨
- 선언이 훨씬 편함
- render() 메서드가 필요 없음

## Props & State

Props:

- 변할 수 없는 데이터 (읽기 전용)
- 상속하는 부모 컴포넌트로부터 props를 받고 (부모 요소에서 설정)
- 상속받은 컴포넌트 내에서 수정이 불가능

```jsx
// 부모 컴포넌트
function Parent() {
	return(
		<Child name="Daniel" />
	)
}

//자식 컴포넌트
function Child(props) {
	return(
		<h1>{props.name}</h1>
	)
}
```

State:

- 변할 수 있는 데이터
- 컴포넌트 내부에서 선언
- 컴포넌트의 상태값을 나타내기 위함
- state가 변하면 다시 렌더링 된다

```jsx
function Name() {
	const [name, setName] = useState("");
	
	return(
		<div>
			<h1>{name}</h1>
			<input value={name} onChange={(e) => setName(e.target.value)} />
		</div>
	)
```

---

# 실습 1

## State와 useState

- State를 쓰기 위해서 useState를 써야함

```jsx
import {useState} from 'react';
// const [이름, set이름] = useState(초기값);

const [name, setName] = useState("Daniel");
```

## 실습 정답 코드

`App.js`

```jsx
import React from 'react';
// Counter 함수 import
import Counter from './components/Counter.js'

function App() {  
  return (
    <div>
      { /* Counter 함수 컴포넌트 삽입 */ }
      <Counter />
    </div>
  );
}

export default App;
```

`components/Counter.js`

```jsx
// react 라이브러리에서 useState 불러오기
import React, { useState } from 'react'
import "../index.css"

function Counter(){
    // useState 함수 (초기값 0) 의 결과를 counter, setCounter 변수에 할당
    const [counter, setCounter] = useState(0)

    const increaseCounter = () => {
        setCounter(counter => counter + 1)
    }
    const decreaseCounter = () => {
        // counter 값을 1 줄이도록 코드 작성
        setCounter(counter => counter - 1)

    }
    
    return(
      <div className="counter">
        <h2> 카운터 </h2>
        <div>{ counter }</div>
        <button onClick={increaseCounter}>증가하기</button>
        <button onClick={decreaseCounter}>감소하기</button>
      </div>
    );
}

export default Counter
```

---

# 실습 2

## Hooks

16.8 버전에 추가된 기능으로, 함수형 컴포넌트에서도 state나 Life Cycle Method를 이용 할 수 있게 되었다

- useState
- useEffect, useContext, useMemo …

## useEffect

컴포넌트가 렌더링 될때마다 특정 작업을 실행할 수 있도록 하는 Hook

```jsx
useEffect(()=>{
    (수행되는 작업)
}, [의존되는 값들 (필수아님)])
```

- mount → 컴포넌트가 화면에 첫 렌더링 되었을 때
    
    ```jsx
    useEffect(() => {
      // 작업
    })
    ```
    
- unmount → 컴포넌트가 화면에서 사라질 때
    
    ```jsx
    useEffect(() => {
      // mount
      // 작업
    
      return() => {
        // unmount
        // 클린업
      }
    })
    ```
    
- update → props, states가 변경되었을 때 (의존성 추가)
    
    ```jsx
    useEffect(() => {
    		// mount 되었을 때
        console.log('user 값이 설정됨');
        console.log(user);
    		
    		// unmount 되었을 때
        return() => {
    	    console.log('user 값이 바뀌기 전');
    	    console.log(user);
      }
    },[user])
    ```
    

## 실습 정답 코드

`App.js`

```jsx
import React from 'react';
// Counter 함수 import
import Counter from './components/Counter.js'

function App() {  
  return (
    <div>
      // Counter 함수 컴포넌트 삽입
      <Counter />
    </div>
  );
}

export default App;
```

`components/Counter.js`

```jsx
// react 라이브러리에서 useState 불러오기
import React, { useState, useEffect } from 'react'
import "../index.css"

function Counter(){
    // useState 함수 (초기값 0) 의 결과를 counter, setCounter 변수에 할당
    const [counter, setCounter] = useState(0)

    const increaseCounter = () => {
        // counter 값을 1 늘리도록 코드 작성
        setCounter(counter => counter + 1)
    }
    const decreaseCounter = () => {
        // counter 값을 1 줄이도록 코드 작성
        setCounter(counter => counter - 1)

    }
    
    // useEffect 함수를 사용하여 document.title 변경
    
    useEffect(() => {
        document.title = `현재 카운터 숫자: ${counter}`;
    })
    
    return(
      <div className="counter">
        <h2> 카운터 </h2>
        <div>{ counter }</div>
        <button onClick={increaseCounter}>증가하기</button>
        <button onClick={decreaseCounter}>감소하기</button>
      </div>
    );
}

export default Counter
```

---

# 실습 3

## 실습 정답 코드

```jsx
import React from "react";
import "./App.css";

//함수 컴포넌트를 사용하여 Subject컴포넌트를 정의합니다.
function Subject(props) {
  return <h3>React를 이해하기 위해서는 {props.name}을(를) 알아야 합니다.</h3>;
}

//App 컴포넌트를 정의합니다.
function App() {
  return (
    <div>
      <Subject name="HTML" />
      <Subject name="CSS" />
      <Subject name="JavaScript" />
    </div>
  );
}

//생성한 컴포넌트를 export하여 index.js에서 렌더링합니다.
export default App;
```

---

# 실습 4

## 실습 정답 코드

```jsx
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import React, { useState } from 'react'

const User = () => {
  const [nickname, setNickname] = useState('')

  const updateNickname = event => {
    // nickname 변수에 event를 이용해 사용자가 입력한 값을 삽입하세요.

    const nickname = event.target.value
    
    // setNickname의 매개변수로 nickname을 넘겨주세요.
    setNickname(nickname)
  }

  return (
    <div>
      <label>{nickname}</label>
      <br/>
      <input 
        value={nickname} 
        onChange={updateNickname} 
      />
    </div>
  )
}

ReactDOM.render(<User />,document.getElementById('root'));

serviceWorker.unregister();
```

---

# 보너스 실습

`App.js`

```jsx
import React, { useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, input]);
    setInput("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Enter a Todo</Form.Label>
          <Form.Control type="text" placeholder="Enter a todo" value={input} onChange={(e) => setInput(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </form>

      <ListGroup>
        {items.map((item) => (
          <ListGroupItem key={item}>{item}</ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
}

export default App;
```