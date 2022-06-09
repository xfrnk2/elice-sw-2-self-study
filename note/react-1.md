리액트는 사용자 정의 태그를 만드는 기술이다.
사요자 정의 태그를 리액트에서는 컴포넌트라 부른다.
컴포넌트를 부품으로 조립해서 완제품을 만드는 것이 리액트를 이용한 개발이다.

### 리액트의 본질 = 사용자 정의태그 = 컴포넌트 만들기

컴포넌트 이름은 반드시 대문자로 시작한다
컴포넌트는 단 하나의 태그를 리턴한다(최상위 태그)

jsx는 기본적으로 자바스크립트를 깔고 있고, 유사 자바스크립트로서의 jsx인데 태그를 따옴표 없이 표현할 수 있도록 해준다

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/40e77ce8-fbde-4f1b-bde8-3c324d8b1c27/Untitled.png)

### 리액트 개발환경 만들기

```jsx
npx create-react-app@latest .
```

### 빌드 폴더를 만들고 배포하기

```jsx
npm run build
```

## 리액트 앱을 github로 퍼블리싱하기

# **목적**

create-react-app을 이용해서 만든 리액트 웹앱을 github로 퍼블리싱하는 방법을 학습합니다.

# **npm build**

배포용 웹앱을 생성합니다.

public 폴더에 존재하는 템플릿을 build 폴더에 생성합니다.

package.json 파일 내에 homepage 속성을 지정하면 CRA가 상대경로를 추론해서 최종본을 생성합니다.

package.json 파일 내에 아래와 같은 내용이 있다면

"homepage": "[https://egoingsb.github.io/my-react-app/](https://egoingsb.github.io/sksauddf/)"	구동되는데 필요한 여러 파일들이 ‘[my-react-app](https://egoingsb.github.io/sksauddf/)’ 아래와 같은 경로를 갖게 됩니다. 	./sksauddf/static/css/main.073c9b0a.css

# **gh-pages**

github으로 코드와 리소스를 업로드하는 도구입니다.

npm install --save-dev gh-pages 로 설치합니다.

# **npm run deploy**

간편하게 deploy를 하기 위해서 명령어를 정의해보겠습니다.

package.json 파일 내에 scripts 부분에 아래 내용을 추가합니다.

"scripts": {    "start": "react-scripts start",    "build": "react-scripts build",    "test": "react-scripts test",    "eject": "react-scripts eject",    **"deploy": "gh-pages -d build"**  },

npm run deploy를 하면 node_modules/.bin/gh-pages 스크립트가 실행됩니다.

- d build 옵션은 build 디렉토리의 내용을 github로 업로드 하라는 의미입니다.

github pages 가 활성화되고, gh-pages라는 이름의 브랜치가 만들어집니다. 이 브랜치에는 build의 내용이 들어갑니다.

# **npm run predeploy**

pre를 붙인 명령어 predeploy를 정의하면 deploy를 하기 전에 predeploy가 자동으로 실행된 후에 deploy가 실행됩니다.

package.json 파일 내에 scripts 부분에 아래 내용을 추가합니다.

"scripts": {    "start": "react-scripts start",    "build": "react-scripts build",    "test": "react-scripts test",    "eject": "react-scripts eject",    "predeploy": "npm run build",    "deploy": "gh-pages -d build"  }

출처 : [https://docs.google.com/document/d/1hvDNZv2iQIqjXhAX96DjRCDEb4RKVG-N6DmsefTKlRU/edit#heading=h.s1imsaj1cwr6](https://docs.google.com/document/d/1hvDNZv2iQIqjXhAX96DjRCDEb4RKVG-N6DmsefTKlRU/edit#heading=h.s1imsaj1cwr6)

빌드 후 생성된 build 파일에 있는 모든 파일들을 레포지토리의 gh-pages에 그대로 올리고 나면, 페이지를 확인할 수 있다!

[https://github.com/egoingsb/2022-6-6](https://github.com/egoingsb/2022-6-6)

### 리액트에서는 Props라는 것을 통해서 데이터를 전달한다.

### 리액트는 단방향 data flow를 갖기때문에 부모에서 자식으로 넘어간다.

컴포넌트 안에 attribute로 데이터를 삽입한다.

```jsx
import React from 'react'
import "../index.css"

function Comment({ text }){
    return(
      <div className="comment">
        <h2> 코멘트 </h2>
        <div>위 사용자의 커멘트: { text }</div>
      </div>
    );
}

export { Comment }
```

```jsx
<Profile text={}/>
```

## 학습 자료집1

# 코드 리포트

## 테슬라, 특별한 이유가 아니면 원격근무 불가

> "사무실에서 최소 주40시간 근무하고 나서 추가로 원격 근무를 하던지, 테슬라를 떠나세요."특별하게 필요하다면 내가 직접 리뷰하고 승인할 거임
> 

> Tesla 직원 모두는 '동료가 근무하는' 사무실에서 40시간 근무해야함이걸 요구하지 않는 회사들도 있지만, 그 회사들이 "위대한 새로운 제품" 출시한게 언제쯤이었나? 아마 오래전일껄.
> 

[https://twitter.com/TechEmails/status/1531994582669348864](https://twitter.com/TechEmails/status/1531994582669348864)

## 네이버/카카오 재택근무

[https://www.youtube.com/watch?v=ER2gRExxbkk](https://www.youtube.com/watch?v=ER2gRExxbkk)

- 카카오: 직원들에게 근무시간엔 늘 온라인에 접속하도록 한 걸 두고, 강제적이라고 비판, 모든 직원이 재택을 비롯한 원격근무를 하는 동안 음성채팅 서비스에 접속
- 네이버: 일주일에 3일 이상 사무실로 나오거나, 5일 내내 재택근무 하는 방식 중 선택

## 달라진 네이버, 넥슨 채용 전략

[네이버·넥슨·MS, 개발자 채용전략 달라졌다](https://www.hankyung.com/it/article/202205301211i)

- 코로나 엔에믹과 금리 인상에 따라 전세계적으로 인플레이션 여파에 따른 수입이 줄면서 채용 인원을 줄이고 있다
- 개발자 몸값은 낮추고, 신입채용 대신 경력직 채용에 집중

## 현대차, 개발자 채용에 적극적

[NHN 기술책임자 영입한 현대차..."소프트웨어 개발자 1만명 뽑겠다"](https://www.mk.co.kr/news/business/view/2022/05/474270/)

- NHN CTO 현대차 합류

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5d50af91-0adc-4337-98ca-d12e6998fe2f/Untitled.png)

## 개발자의 무덤, 은행, 곧 바뀌나?

[코딩 잘하면 '문과생 웰컴'... 확 바뀐 은행](https://www.chosun.com/economy/economy_general/2022/05/31/5NQYZROKLZAUBBP72CMVRFKJIQ/)

- 예전에 은행은 개발자의 무덤이라고 함 → 옛날 기술을 주로 써서 이직이 어려움
- 하지만 요즘 디지털 전환 때문에 은행에서도 개발자들을 공격적으로 채용
- 자체 앱을 만들면서 개발자들의 중요도가 오름
- 더이상 무덤이 아닐수도

---

# React?

- Facebook에서 제공한 프론트엔드 라이브러리
- SPA (Single Page Application) 개발에 주로 쓰인다
- 사용자와의 상호작용을 쉽게 구현 할 수 있어 많이 사용됨

## React의 특징

- One way Data Flow (단방향 데이터 플로우)
- Component 기반 구조
- Virtual DOM
- Props and State
- JSX

## React로 만들어진 웹사이트

- Notion
- facebook
- airbnb
- dropbox
- Instagram
- Netflix

---

# 실습 1

## JSX란?

- JavaScript 코드에 있는 HTML 문법
- React 내에 HTML을 표현할 때 JSX를 사용한다
- Babel을 통해 자바스크립트로 변환된다 → 자바스크립트 코드를 HTML처럼 표현할 수 있다

## JSX를 사용할때 유의해야 할 점

- class를 쓸때는 className이라고 표기한다
- 태그는 항상 닫혀 있어야 한다
- JSX내에 변수는 중괄호에 감싸준다
- 어떤 태그라도 내용이 없으면 self-closing tag가 가능하다
    
    ```jsx
    return (
    	<div>
    		<input />
    		<br />
    	</div>
    )
    ```
    
- 하나의 태그안에 작성을 해야한다
    
    ```jsx
    // 안좋은 예시
    return (
    	<div> ... </div>
    	<div> ... </div>
    );
    
    // 좋은 예시
    return (
    	<div>
    		<div> ... </div>
    		<div> ... </div>
    	</div>
    );
    
    // 또는 React Fragement 사용
    return (
    	<>
    		<div> ... </div>
    	</>
    )
    ```
    

## 결론: 그냥 HTML처럼 쓰면 됨

<aside>
💡 파일의 마지막에 존재하는 코드 **`serviceWorker.unregister();`**는 앱 배포 시 캐시가 남지 않도록 하는 코드입니다. 해당 메소드에 관한 자세한 설명은 [링크](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/unregister)에서 확인하세요!

</aside>

## 실습 정답 코드

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//element에 코드를 입력해주세요.  
const element = (
    <div>
    <h2>
        코더랜드에 오신것을 환영합니다:)
    </h2>
    <h2>
        즐거운 React! 함께 공부해봐요~
    </h2>
    </div>
);

ReactDOM.render(element, document.getElementById('root'));

serviceWorker.unregister();
```

---

# 실습 2

## 실습 정답 코드

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//고객의 이름을 출력하는 함수
function formatName(user){
  return user.lastName + ' ' + user.firstName;
}

//고객의 이름을 저장하는 변수
const user = {
  lastName: '코딩하는',
  firstName: '엘리스'
}

//인사문구를 출력하는 함수
//formatName()함수를 사용해 출력문구를 완성합니다.
function getGreeting(user) {
  return <h1>Hello, {formatName(user)}!</h1>;
}
//getGreeting()의 결과값을 element에 저장합니다.
const element = getGreeting(user);

ReactDOM.render(element, document.getElementById('root'));

serviceWorker.unregister();
```

---

# 실습 3

## Element?

## Component?

컴포넌트를 통해 UI를 재사용 가능한 개별적인 여러 조각으로 나누고, 각 조각을 개별적으로 살펴볼 수 있습니다.

[Components와 Props - React](https://ko.reactjs.org/docs/components-and-props.html)

- 쉽게 이야기해서 하나의 레고 블럭
- 여러 레고 블럭을 만들어서 공통적인 부분들은 재사용한다
- 개념적으로 컴포넌트는 함수와 유사
    - props라는 매개변수를 받아서 jsx에 넘겨주면 화면에 표시가 가능하다

## 함수형 컴포넌트 만드는 방법

```jsx
function SayHello() {
  return <h1>Hello, {name}</h1>; //name은 변수
}
```

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//정의된 이름
const name = "Sara"

//함수명이 Welcome인 컴포넌트를 작성합니다.
function Welcome() {
  return <h2>Welcome, {name}</h2>;
}

//컴포넌트를 호출합니다.
const element = <Welcome/>;
ReactDOM.render(element, document.getElementById('root'));

//뒤에 serviceWorker.unregister() 잊지 말고 써주세요!
serviceWorker.unregister();
```

## 실습 정답 코드

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//정의된 이름
const name = "Sara"

//함수명이 Welcome인 컴포넌트를 작성합니다.
function Welcome() {
  return <h2>Welcome, {name}</h2>;
}

//컴포넌트를 호출합니다.
const element = <Welcome/>;
ReactDOM.render(element, document.getElementById('root'));

serviceWorker.unregister();
```

---

# 실습 3

## **지시사항**

1. **`components/Profile.js`**를 작성합니다.
    - **`Comment.js`** 파일에서 **`Comment`** 컴포넌트를, **`UserInfo.js`** 파일에서 **`UserInfo`** 컴포넌트를 **`import`**합니다.
    - **`App`** 컴포넌트의 주석처리된 부분 아래 줄(20, 22줄)에 각각 **`Comment`**, **`UserInfo`** 컴포넌트를 삽입합니다.
2. **`App.js`**를 작성합니다.
    - **`components/Profile.js`** 파일에서 **`Profile`** 함수를 **`import`** 합니다.
    - **`App`** 컴포넌트의 주석처리된 부분 아래 줄(11줄)에 **`Profile`** 컴포넌트를 삽입합니다.

### `components/Profile.js`

```jsx
import React from 'react';

// Comment 컴포넌트 import
import { Comment } from "./Comment.js"
// UserInfo 컴포넌트 import
// 이건 여러분들이...

import "../index.css"

function Profile() {
  const user1 = {
        name: '엘리스 토끼',
        age: '12'
      }
  const text1 = 'React는 재밌다!!'  
    
  return (
    <div className="profile">
      // Comment 컴포넌트를 삽입하며, text props로 text1 를 전달함.
			<Comment text={ text1 } />
      // UserInfo 컴포넌트를 삽입하며, user props로 user1 를 전달함.
      <UserInfo user={ user1 } />
    </div>
  );
}

export { Profile };
```

### App.js

```jsx
import React from 'react';
// Profile 함수 import

function App() {
  const title = "사용자 프로파일"   
  return (
    <div>
      <h1>{ title }</h1>
      // Profile 함수 컴포넌트 삽입
      <Profile />
    </div>
  );
}

export default App;
```

## 실습 정답 코드

`App.js`

```jsx
import React from 'react';
// Profile 함수 import

import { Profile } from "./components/Profile.js"

function App() {
  const title = "사용자 프로파일"   
  return (
    <div>
      <h1>{ title }</h1>
      // Profile 함수 컴포넌트 삽입
      <Profile />
    </div>
  );
}

export default App;
```

`components/Profile.js`

```jsx
import React from 'react';
// Comment 컴포넌트 import
import { Comment } from "./Comment.js"
// UserInfo 컴포넌트 import
import { UserInfo } from "./UserInfo.js"
import "../index.css"

function Profile() {
  const user1 = {
        name: '엘리스 토끼',
        age: '12'
      }

  const text1 = 'React는 재밌다!!'  
    
  return (
    <div className="profile">
      // Comment 컴포넌트를 삽입하며, text props로 text1 를 전달함.
      <Comment text={ text1 } />
      // UserInfo 컴포넌트를 삽입하며, user props로 user1 를 전달함.
      <UserInfo user={ user1 } />
    </div>
  );
}

export { Profile };
```

---

# CRA로 리엑트 맛보기

## CRA란?

Create-React-App 

리엑트를 사용하려면 webpack과 babel을 세팅해줘야 하는데, CRA를 사용하면 이런 설정들을 대신 해줌

CRA를 사용하면 복잡하게 설정할 필요 없이 React 개발 환경을 셋업 할 수 있다

## CRA 사용하기

```bash
npx create-react-app my-app <-- my-app은 프로젝트의 이름
cd my-app
npm start
```

![screencast.svg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b28e0ef6-5455-4cd2-bb2a-948f1bf0bbd5/screencast.svg)

<aside>
💡 `create-react-app` 다운 받아야 한다고 뜨면 `y` 누르면 됩니다

</aside>

## CRA 뜯어보기

CRA에는 3가지 라이브러리가 포함되어 있음

- react → 리엑트 코어
- react-dom → 렌더링 담당
- react-scripts → CRA 라이브러리

## 프로젝트 구조

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fe9643b5-b517-4846-b49c-b4a2b6c2c53d/Untitled.png)

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

나중에 추가할 수 있는 것들

- components (공통 컴포넌트를 담는 폴더)
- pages (페이지 단위의 컴포넌트 폴더)
- styles (스타일 폴더)

## 결론

- `public/index.html`
- `src/index.js`

두개 빼고 다 지워도 됨

## React Bootstrap 세팅

```bash
npm install react-bootstrap bootstrap
```

`index.js`

```jsx
// 상단에 아래 코드 추가
import 'bootstrap/dist/css/bootstrap.min.css';
```

## 간단한 카드 만들어보기

`components/Card.js`

```jsx
import React from "react";
import { Card, Button } from "react-bootstrap";

function ProfileCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://static.remove.bg/remove-bg-web/035676ee65d6ce9f128769532ffdff315f3005c7/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;
```

`App.js`