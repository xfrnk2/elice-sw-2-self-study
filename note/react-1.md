# react-2022/06/06

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