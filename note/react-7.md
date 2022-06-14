## 학습 자료집 1

# 코드 리포트

## 1999년에 출간된 "Code: The Hidden Language of Computer Hardware and Software", 2판 발표

[찰스 페졸드의 CODE 2판 발표 | GeekNews](https://news.hada.io/topic?id=6730)

- 2022년 8월 19일에 2판 출간 예정(영문)
- 1판 번역본이 있기 때문에 2판도 번역본이 나올 가능성이 있음
- 컴퓨터의 작동 원리에 대해서 더 탐구하고 싶은 사람들에게 추천

## Apple, 드디어 web push 지원

[Meet Web Push](https://webkit.org/blog/12945/meet-web-push/)

- Web Push는 W3C 표준인 Push API, Notifications API, Service Workers 를 같이 이용함으로써 구현됨
- macOS Ventura 의 Safari 16에서 Web Push 지원→ 표준에 따라 개발하면, 애플 개발자 프로그램 가입할 필요 없음
- 2023년엔 iOS/iPadOS 에서 Web Push 지원 예정
- 애플 웹킷은 webpushd 라는 데몬이 추가되어 웹페이지의 푸시 구독 요청을 APNS로 전환시켜주는 역할을 함

## 애플 디자인 어워드

[Apple 디자인 어워드 - Apple Developer](https://developer.apple.com/kr/design/awards/)

## Atom, 역사 속으로 살아진다

[Sunsetting Atom | The GitHub Blog](https://github.blog/2022-06-08-sunsetting-atom/)

- 2011년 개발자를 위한 텍스트 에디터로 시작
- 2022년 12월 15일자로 프로젝트를 종료하고 아카이브 할 예정
- 이제 VSCode 및 GitHub Codespaces에 집중
- MS에 인수되면서 VSC에 집중하는걸로 보임

---

# 실습 1

## 복습: React 파일 구조 둘러보기

### `node_modules`

- 관련 패키지가 있는 폴더

### `public`

- 화면에 출력되는 파일들
- 안에 있는 `index.html`에 DOM을 출력
- `mainfest.json`은 PWA에 사용된다
- `robots.txt` 크롤링의 접근 권한 제어

```bash
<div id="root"></div>
```

### `src`

- 코드 작업을 하는 공간
- `index.js` 리엑트의 시작 포인트
    - `ReactDOM.render( <App /> , document.getElementById('root'))`
        - ReactDOM.render 함수의 인자는 두 개
        - 첫 번째 인자는 화면에 보여주고 싶은 컴포넌트
        - 두 번째 인자는 화면에 보여주고 싶은 컴포넌트의 위치
    - 되도록이면 수정하지 말것
- `App.js` 화면에 보여지고 있는 초기 컴포넌트

## 힌트 (useState를 활용한 display 원소 작성하기)

### useState 사용하는 방법

```jsx
import {useState} from 'react';
// const [이름, set이름] = useState(초기값);

const [name, setName] = useState("Daniel");
```

### State에 배열 넣기

```jsx
const [data, setData] = useState([
	{name: "Daniel", msg: "Hello"},
	{name: "John", msg: "Hey"}
]);
```

### addTodo & completeTodo

일단 컨포넌트를 살펴보자면…

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b8198259-22c7-437e-910d-44cc08d5b6cc/Untitled.png)

### Spread Operator 사용 방법 (배열 복제 방법)

```jsx
const 배열추가 함수 = (받아오는 매개변수 text) => {
  const 새로운 배열 = [...(위에서 새팅한 todo state), { 받아온 매개변수 text }];
	setter 함수를 이용하여 새로운 배열 set;
};

const 배열 엎데이트 함수 = (받아오는 매개변수 index) => {
	const 새로운 배열 = [...todo 배열] <-- 배열 복제
	새로운배열[매개변수 index].hasCompleted = logical Not operator 사용 (앞에 !)
  // newTodos[index].hasCompleted = !newTodos[index].hasCompleted;
	setter 함수를 이용하여 새로운 배열 set;
};
```

## Map과 Key

```jsx
return (
    <div className="app">
      <div className="todo-list">
        <h1>List</h1>
        <TodoForm addTodo={addTodo} />
        {배열.map((아이템, 인덱스) => {
          return (
            <Todo
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          );
        })}
      </div>
    </div>
  );
```

## 실습 정답 코드

```jsx
//1. useState를 react에서 import하세요.
import { useState } from "react";
import React from 'react';
import Todo from "./todo";
import TodoForm from "./TodoForm";

function App() {
  //2. useState가 반환하는 첫 번째 인자인 state와 두 번째 인자인 setState를 todo, setTodo로 변경하세요.
  //3. useState의 배열에 초기화면에 display할 원소를 작성하세요.이렇게하면 useState 는 배열로 초기화하는데, 개별 원소는 text(사용자가 입력한 todo)와 hasCompleted(완료여부)로 구성됩니다.
  const [todos, setTodos] = useState([
    {
      text: "Upload the Vlog by tonight",
      hasCompleted: false,
    },

    {
      text: "Read Book from page 51~220",
      hasCompleted: false,
    },

    {
      text: "Finish Season 3 of La Casa De Papel",
      hasCompleted: false,
    },
  ]);
  //4. addTodo()와 completeTodo() 함수를 작성하세요.이때 사용자가 입력한 text 데이터를 array(newTodos)로 받아 text로 전달하세요.
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].hasCompleted = !newTodos[index].hasCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        <h1>TO DO LIST</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => {
          return (
            <Todo
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
```

---

# 실습 2

## Grid Layout

Grid Layout은 2차원 행과 열의 집합 형태로 html 요소들을 구성할 수 있도록 한 레이아웃입니다.  아이템을 원하는 위치에 배치시킬 수 있고, 요소끼리 겹치게도 할 수 있습니다. 

더 자세히 알아보고 싶다면 [https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Grid_Layout](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Grid_Layout)
[https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Grid_Layout/Basic_concepts_of_grid_layout](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Grid_Layout/Basic_concepts_of_grid_layout) 

**그리드 아이템을 적용하기 위해서는 해당 클래스의 `display`를 `grid`로 지정해줘야 합니다.** 

## Flexbox란?

Flexbox는 레이아웃 배치 전용 기능으로 만들어졌습니다. 그래서 기존에 쓰던 float나 inline-block 등을 이용한 방식보다 훨씬 강력하고 편리한 기능들이 많습니다.

Flex의 기본기부터 알아봅시다.

Flex에서 부모인 태그를 Flex Container,

Flex Container 안에 있는 자식 요소들은 Flex Items라고 부릅니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0afc4273-44f2-419a-823d-dd1ad413f345/Untitled.png)

Flex의 CSS속성들은 두가지로 나뉩니다.

- Flex container에 적용되는 속성
- Flex item에 적용되는 속성

### Flex Container에 적용되는 속성

일단 Flex container를 만들어주려면 `display: flex;`를 적용시켜 줘야 합니다.

```css
.container {
	display: flex;
}
```

Flex를 적용시켜주면 Flex의 아이템들은 기본적으로 가로 방향으로 배치됩니다. 기존에 세로로 배치되는 것과 다르죠. 물론 속성중에 세로로 배치되도록 하는 속성도 있습니다.

Flex의 아이템들은 자신이 가진 width만큼 자리를 차지하고, height는 컨테이너만큼 늘어납니다.

**방향 설정 (Flex direction)**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/40430115-4c9b-4a5b-82ca-9781902ddc9a/Untitled.png)

**줄넘김 처리 (flex-wrap)**

컨테이너가 더 이상 아이템들을 한 줄에 담을 여유 공간이 없을 때아이템 줄바꿈을 어떻게 할지 결정하는 속성입니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3132cb8f-2d95-4bbc-acea-e9fe916c73ca/Untitled.png)

### CSS GRID CHEAT SHEET

[A Complete Guide to Flexbox | CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Flexbox와 Grid의 차이점?

**Flex는 1차원으로 수평, 수직 영역 중 하나의 방향**으로만 레이아웃을 나눌 수 있습니다.

그에 비해 **Grid는 2차원으로 수평 수직을 동시에 영역**을 나눌 수 있습니다.

[CSS 레이아웃 - Grid, Flex 차이 및기본 개념](https://free-eunb.tistory.com/86)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4b426dcd-7280-4038-bfeb-ebb44f66d678/Untitled.png)

## 실습 정답 코드

`Form.css`

```jsx
/*배웠던 내용을 활용하여 자유롭게 스타일링해보세요.*/
.form {
  display: flex;
}

.form input {
  flex: 1;
  font-size: 1.25rem;
  outline: none;
  border: none;
  border-bottom: 1px solid #c5f6fa;
}

.create-button {
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  background: 3px solid #5426cc;
  border-radius: 3px;
  color: #cef1ee;
  font-weight: 600;
  cursor: pointer;
}

.create.-button:hover {
  background: #3bc9db;
}

.todo-item {
  padding: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.15s;
  user-select: none;
}

.todo-item:hover {
  background: #cef1ee;
}

.todo-item:hover .remove {
  opacity: 1;
}

.todo-item + .todo-item {
  border-top: 1px solid #cef1ee;
}

.remove {
  margin-right: 1rem;
  color: #e64980;
  font-weight: 600;
  opacity: 0;
}

.todo-text {
  flex: 1;
  word-break: break-all;
}

.checked {
  text-decoration: line-through;
  color: #4c445f;
}

.check-mark {
  font-size: 1.5rem;
  line-height: 1rem;
  margin-left: 1rem;
  color: #cef1ee;
  font-weight: 800;
}
```

`TodoListTemplate.css`

```jsx
/*배웠던 내용을 활용하여 자유롭게 스타일링해보세요.*/
.todo-list-template {
  background: white;
  width: 512px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin: 4rem auto 0;
}

.title {
  padding: 2rem;
  font-family: "Malgun Gothic";
  font-size: 2.7rem;
  text-align: center;
  font-weight: normal;
  background: #5426cc;
  color: white;
}

.form-wrapper {
  padding: 1rem;
  border-bottom: 1px solid #5426cc;
}

.todos-wrapper {
  min-height: 5rem;
}
```

---

# 실습 3

## Styled-components

Component에 스타일을 바로 삽입하는 방법

HTML 엘리먼트를 스타일링 할 때는 모든 알려진 HTML 태그에 대해서 이미 속성이 정의되어 있기 때문에 해당 태그명의 속성에 접근합니다.

```jsx
import styled from "styled-components";

styled.HTML의 태그 이름`
	// 스타일을 써주면 됩니다
`
```

```jsx
import styled from "styled-components";

styled.button`
  // <button> HTML 엘리먼트에 대한 스타일 정의
`;
```

React 컴포넌트를 스타일링 할 때는 해당 컴포넌트를 임포트 후 인자로 해당 컴포넌트를 넘기면 됩니다.

```jsx
import styled from "styled-components";
import 컴포넌트의 이름 from "./컴포넌트 이름";

styled(컴포넌트의 이름)`
	// CSS 스타일링
`
```

```jsx
import styled from "styled-components";
import Button from "./Button";

styled(Button)`
  // <Button> React 컴포넌트에 스타일 정의
`;
```

## 실습 정답 코드

`MathProblem.js`

```jsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const GameStatus = {
  CORRECT: "correct",
  INCORRECT: "incorrect",
  READY: "ready",
};

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

function MathProblem() {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [gameStatus, setGameStatus] = useState(GameStatus.READY);

  const generateProblem = () => {
    setAnswer("");
    setN1(generateRandomNumber());
    setN2(generateRandomNumber());
    setGameStatus(GameStatus.READY);
  };

  const handleSubmit = () => {
    const numberedAnswer = Number(answer);
    if (n1 + n2 === numberedAnswer) {
      setGameStatus(GameStatus.CORRECT);
    } else {
      setGameStatus(GameStatus.INCORRECT);
    }
  };

  const handleAnswerInput = (e) => {
    setAnswer(e.target.value);
  };

  useEffect(() => {
    generateProblem();
  }, []);

  return (
    <div>
      <Problem>
        <span>{n1}</span>
        <span>+</span>
        <span>{n2}</span>
      </Problem>

      <Line />

      <AnswerSheet>
        <Equal> = </Equal>
        <AnswerInput
          id="answer"
          type="number"
          name="answer"
          value={answer}
          onChange={handleAnswerInput}
        />
        <SubmitButton onClick={handleSubmit}>제출</SubmitButton>
      </AnswerSheet>

      <Result>
        {gameStatus === GameStatus.CORRECT
          ? "정답입니다"
          : gameStatus === GameStatus.INCORRECT
          ? "오답입니다"
          : ""}
      </Result>

      {gameStatus === GameStatus.CORRECT && (
        <ButtonContainer>
          <GenerateProblemButton onClick={generateProblem}>
            문제 생성
          </GenerateProblemButton>
        </ButtonContainer>
      )}
    </div>
  );
}

export default MathProblem;

const Problem = styled.div`
  font-size: 2rem;
  & > span:not(:first-of-type) {
    margin-left: 12px;
  }
`;

const Line = styled.hr`
  margin: 12px 0;
`;

const AnswerSheet = styled.div`
  display: flex;
`;

const Equal = styled.div`
  align-self: center;
  font-size: 1.4rem;
`;

const AnswerInput = styled.input`
  margin-left: 12px;
  padding: 12px;
  box-sizing: border-box;
  font-size: 1.4rem;

  width: 150px;
  height: 45px;

  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const SubmitButton = styled.button`
  width: 80px;
  margin-left: 12px;
  height: 45px;
  background: #d3f9d8;
  font-size: 0.9rem;
  font-weight: 700;
  border: none;
  border-radius: 4px;
  color: #495057;
`;

const Result = styled.div`
  padding: 12px 0;
  font-size: 0.8rem;
  min-height: 40px;
`;

const ButtonContainer = styled.div`
  margin-top: 12px;
`;

const GenerateProblemButton = styled.button`
  width: 100%;
  height: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  border: none;
  border-radius: 4px;
  background: #748ffc;
  color: #fff;
`;
```

---

# SASS란?

CSS-Prepocessor의 일종!

## 그럼 CSS-Prepocessor란?

CSS 전처리기로, CSS에 추가적인 기능을 쓸 수 있도록 해준다

**전처리기 3대장**

- Sass (SCSS)
- Less
- Stylus

## Sass와 SCSS의 차이점??

SCSS는 CSS와 거의 같은 문법으로 Sass 기능을 지원합니다

<aside>
💡 간단한 차이: `{}` 중괄호와 `;` 세미콜론의 유무

</aside>

Sass:

```sass
.list
  width: 150px
	margin: 20px
  li
    color: yellow
    &:last-child
      margin-right: -10px
```

SCSS:

```scss
.list {
  width: 150px;
	margin: 20px;
  li {
    color: yellow;
    &:last-child {
      margin-right: -10px;
    }
  }
}
```

<aside>
💡 보통 SCSS를 추천합니다

</aside>

## 기초 기능 소개

### Nesting

`컴파일 전`

```scss
.section {
  width: 100%;
  .list {
    padding: 20px;
    li {
      float: left;
    }
  }
}
```

`컴파일 후`

```css
.section {
  width: 100%;
}
.section .list {
  padding: 20px;
}
.section .list li {
  float: left;
}
```

## **Ampersand (상위 선택자 참조)**

`컴파일 전`

```scss
.fs {
  &-small { font-size: 12px; }
  &-medium { font-size: 14px; }
  &-large { font-size: 16px; }
}

```

컴파일 후