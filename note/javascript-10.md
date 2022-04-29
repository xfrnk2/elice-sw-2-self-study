### 자바스크립트는 단 1개의 메인 스레드로 구성, 다른 언어 비동기와 다름

- 자바스크립트 엔진은 비동기 처리를 제공하지 않는다.
- 대신, 비동기코드는 정해진 함수를 제공하여 활용할 수 있다.
- 이 함수들을 API라 한다.
- 비동기 API의 예시로, setTimeout, XMLHttpRequest, fetch 등의 Web API가 있다.
- node.js의 경우 파일 처리 API, 암호화 API 등을 제공한다.

```jsx
// 타이머비동기처리
setTimeout(() => console.log('타이머끝'), 1000)
setInterval(() => console.log('인터벌타이머'), 1000)
// 네트워크처리

fetch('[https://google.com](https://google.com/)')
   .then(() => console.log('네트워크요청성공.'))
   .catch(() => console.log('네트워크요청실패.'))
```

### 자바스크립트 비동기 처리 모델

- 비동기코드를처리하는모듈은자바스크립트엔진외부에있다.
- 이벤트루프(event loop), 태스크큐(task queue), 잡큐(job queue) 등으로구성된다.
- API 모듈은비동기요청을처리후태스크큐에콜백함수를넣는다.
- 자바스크립트엔진은콜스택이비워지면, 태스크큐의콜백함수를실행한다

![image](https://user-images.githubusercontent.com/34790699/165965471-dbdad243-e828-4ca4-aca5-b7e6fbfcbe37.png)


### 자바스크립트의 비동기 작업 표현, 처리 객체 Promise

- 진행, 성공, 실패, 그리고 순서를 표현 할 수 있다.

```jsx
let promise= new Promise((resolve, reject) => {
if(Math.random() < 0.5) {
returnreject("실패")
	}resolve(10)
})
```

- new Promise(callback)
- callback 함수는(resolve, reject) 두인자를받는다.
- Promise가성공했을때resolve를호출한다.
- Promise가실패했을때reject를호출한다

### Promise 메서드 체인

```jsx
promise.then(data=> {console.log("성공: ", data)})
   .catch(e=> {console.log("실패: ", e)})
   .finally(() => {console.log("promise 종료")})
```

- finally() 메서드는성공/실패여부와상관없이모두실행할콜백함수를인자로넘긴다.
- then(callback1, callback2)로callback1의자리에성공, callback2의자리에실패메서드를인자로넘길수있다.

### 언제 Promise.all()을 사용해야 할까?

```jsx
console.time("소요시간");
  await Promise.all([
    display("jacob", 3000),
    display("제이콥", 2000),
    display("콥짱", 1000)
  ]);
  console.timeEnd("소요시간");
  
  // 소요시간: 3005ms
```

[https://code-masterjung.tistory.com/91](https://code-masterjung.tistory.com/91)

[https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F1yV49%2FbtqGYpxYRYP%2FzuhA7oic2ZxkZVQpQCwKT1%2Fimg.png](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F1yV49%2FbtqGYpxYRYP%2FzuhA7oic2ZxkZVQpQCwKT1%2Fimg.png)

위 Promise.all([...]) 코드에서 display(3000), display(2000), display(1000)가 차례대로 앞의 함수의 실행이 완료되는 것을 기다리지 않고 비동기적으로 병렬로 실행된다. 여기서 눈여겨볼 점은 "순서대로 실행되지만, 앞의 함수가 완료되는 것을 기다리지 않는다"는 것이다.

그리고 마지막으로 완료되는 함수까지 기달려다가 값을 반환한다. 이때 반환 순서는 실행 순서와 동일하게 준다(완료 순서가 아니다!). 그래서 각각의 완료 값을 만약 변수에 할당한다고 하면 아래와 같이 적을 수 있다.

```jsx
const [res1, res2, res3] =await Promise.all([display(3000), display(2000), display(1000)])
```

### **Promise.all의 장점 - Fail Fast**

비동기처리를 병렬적으로 해서 더 빠른 게 처리할 수 있다는 장점이 있다. 하지만 이때만 장점이 있는 게 아니라, 비동기 처리가 실패했을 경우에도 있다. Promise.all()은 중간에 어떤 함수가 에러가 났을 때 그 실패를 즉시 반환한다.

### 비동기 코드 작성 문법 -async, await

- await 키워드는반드시async 함수안에서만사용해야한다.
- async로선언된함수는반드시Promise를리턴한다

```jsx
asyncfunctionasyncFunc() {
	letdata1= await fetchData1()
	letdata2= await fetchData2(data1)
	letdata3= await fetchData3(data2)
	returndata3
	}

functionpromiseFunc() {
	return fetchData1().then(fetchData2).then(fetchData3)}
```

- await 키워드는, then 메서드체인을연결한것처럼순서대로동작한다.
- 비동기코드에쉽게순서를부여한다.

### async, await의 에러 처리

```jsx
functionfetchData1() {
	return request().then((response) => response.requestData)
									.catch(error=> {// error 발생})}
```

- Promise를리턴하는함수의경우, 에러가발생하면catch 메서드를이용하여에러를처리한다.
- catch 메서드를사용하지않는다면 async 함수에서 try-catch 구문을 이용하여 에러를 처리한다.

```jsx
asyncfunctionasyncFunc() {
	try{letdata1= await fetchData1()
		return fetchData2(data1)}
	catch(e) {
			console.log("실패: ", e)
			}
}
```

### Fetch API

- 기존XMLHTTPRequest를대체하는HTTP 요청API
- ES6에추가된Promise를리턴하도록정의됨
- •네트워크요청성공시, Promise는Response 객체를resolve 한다.
- 네트워크요청실패시, Promise는에러를reject 한다.

```jsx
letresult= fetch(serverURL)result
						.then(response=> {
							if(response.ok) {
									// 요청성공.}})
						.catch(error=> {// 요청실패.
						}
					)
```

### Post Request

```jsx
fetch(serverURL, {
	method: 'post',headers: {
						'Content-Type': 'application/json;charset=utf-8',
						Authentication: 'mysecret'
						},
	 body: JSON.stringify(formData)})
	.then(response=> {
			return response.json()}).then(json=> {
							console.log('POST 요청결과:', json)
									}
				)
```

### Response

```jsx
fetch(serverURL).then(response=> {
			response.ok
			response.status
			response.statusText
			response.url
			response.bodyUsed
				}
		)
```

- Response 객체는결과에대한다양한정보를담는다.
- response.ok는HTTP Status code가200-299 사이면true, 그외false이다.
- response.status는HTTP status code를담는다.
- response.url은요청한URL 정보를담는다.

### Response - header

```jsx
fetch(serverURL).then(resp=> {
			for(let[k, v] of resp.headers) {
					console.log(k, v)}
					}
			)
```

- response.headers로Response 객체의헤더정보를얻을수있다.

### Response - body

```jsx
fetch(serverURL).then(response=> {
			returnresponse.json()}).then(json=> {console.log('body : ', json)}
```

- response.json() 메서드는얻어온body 정보를json으로만드는Promise를반환한다.
- Promise가resolve 되면얻어온body 정보를읽는다.
- response.text(), response.blob(), response.formData() 등의메서드로다른형태의바디를읽는다.

## 문제 풀이

## 조건만족시 이벤트가 주기적으로 발생하다가, 멈출시 효과가 멈추는 쓰로틀링(Throttling)

- • 조건이 지속적으로 만족될 때에는 **효과(점수 증가, api 요청 등)가 주기적으로 발생**하다가, 멈출 시(조건 불만족) 효과가 멈추는 것을 **쓰로틀링(throttling)** 이라고 합니다.

```jsx
// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.
const score = document.querySelector("#score");
const nameElem = document.querySelector("#inputName");
let scoreTimer;
let isInThrottle;

function addScore () {
    
    if (isInThrottle) {
        return
    }    

    isInThrottle = true;
    
    scoreTimer = setTimeout(() => {
       score.innerText = parseInt(score.innerText) + 1;
       isInThrottle = false;

    }, 500)
}

nameElem.addEventListener("input", addScore);
```

1. 타이핑 도중에는, 0.5초마다 숫자가 1 증가함.
2. 타이핑을 멈추면, 숫자가 증가하지 않음.

### Fetch 사용해서 데이터 가져오기 2 - 나의 풀이

```jsx
// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.

const selectEmployeeCode = document.querySelector("#selectEmployeeCode");
const buttonSubmit = document.querySelector("#buttonSubmit");
const employeeEmail = document.querySelector("#employeeEmail");

function getEmail (e) {
    e.preventDefault();
    fetch('./employees.json')
        .then((res) => res.json())
        .then((datas) => {
            const  employees = datas.Employees;
         return employees.find((p) => p.employeeCode === selectEmployeeCode.value)
       })
       .then((target) => { employeeEmail.innerHTML = target.emailAddress })
   
        
}

buttonSubmit.addEventListener("click", getEmail)
```

### 함수를 아래와 같이 넘겨서 setTimeout을 쓸 수도 있다.