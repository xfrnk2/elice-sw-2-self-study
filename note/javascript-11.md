# javascript/2022-04-29

- Axios는 웹 브라우저와 Node.js를 위한 HTTP 비동기(작성된 순서대로 실행되지 않는 처리) 통신 라이브러리
- Axios는 [Promise](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)를 기반으로 만들어진 라이브러리입니다. Promise는 자바스크립트 ES6에서 비동기 처리를 위해 주로 사용되는 객체입니다.
- Ajax란 비동기 자바스크립트란 의미로 Asynchronous JavaScript and XML의 약자입니다. Ajax는 브라우저가 가지고 있는 [XMLHttpRequest](https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest) 객체를 이용하여 화면 전체를 새로 고침 하지 않고 변경된 일부 데이터만 로드하는 비동기 처리가 가능합니다. Axios는 Ajax와 유사하며 API를 이용한 통신을 할 때 주로 사용합니다.

## **Fetch vs Axios**

Fetch와 Axios 둘 다 HTTP 요청을 처리하기 위한 자바스크립트의 라이브러리이지만 몇 가지 차이점이 존재합니다.

1. Fetch의 경우 자바스크립트에 내장되어 있기 때문에 별도의 import나 설치가 필요하지 않습니다. 하지만 Axios의 경우 간단하지만, 위의 사용법 설명처럼 설치 과정이 필요합니다.
2. Fetch는 일부 예전의 인터넷 익스플로러 버전에서 지원하지 않는 경우가 있어, Axios가 Fetch보다 브라우저 호환성이 뛰어납니다.
3. Fetch에서는 지원하지 않는 JSON 자동 변환, 응답 시간 초과 설정 기능 등을 Axios에서 지원해줍니다.

그렇다면 역시 더 좋아 보이는 Axios를 무조건 사용해야 할까요? 그렇지는 않습니다. axios는 외부 모듈로 따로 패키지 설치를 해줘야 사용할 수 있으니, 여의치 않다면 fetch를 사용해도 상관 없습니다.자신의 개발 상황(지원하는 브라우저, 기타 다른 패키지 등등)에 맞는 라이브러리를 선택하는 것이 필요합니다.

> 학습하는 모든 기술 스택을 무조건 사용해야 하는 것은 결코 아닙니다. 배운 것을 어떤 상황에 활용해야 하는지를 염두에 두면서 학습하면 개발을 할 때 기술 스택을 선택하기에 용이합니다.
> 

## **Axios와 CRUD**

CRUD가 Create, Read, Update, Delete의 제일 앞 문자를 하나씩 따와 만든 줄임말로 각각은 아래처럼 매칭이 됩니다.C : Create(생성) - POSTR : Read(조회) - GETU : Update(수정) - PUTD : Delete(삭제) - DELETE

### **Axios 사용법**

**`index.html`**에 아래 두 스크립트를 추가해주면 **`axios`** 라이브러리를 손쉽게 사용할 수 있습니다.

```
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

```

각 메소드가 어떠한 형태로 사용되는지 아래에서 살펴보세요.**POST**

```
axios.post(url, data 객체)

```

POST는 새로운 자원을 생성할 때 사용합니다.

**GET**

```
axios.get(url)

```

GET은 자원을 요청할 때 사용합니다.

**PUT**

```
axios.put(url, data 객체)

```

PUT은 자원을 갱신할 때 사용합니다.

**DELETE**

```
axios.delete(url)

```

DELETE는 자원을 삭제할 때 사용합니다.