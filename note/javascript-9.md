### 지연시간 설정을 해제하는 clearTimeout(setTimeout 유형의 함수)

```
let alertTimer;
function alertWhenTypingStops () {

if (alertTimer) {
    clearTimeout(alertTimer);
}

const name = inputName.value;
alertTimer = setTimeout(() => alert(`입력된 이름: ${name}`), 2000);

}

const inputName = document.querySelector("#inputName");
inputName.addEventListener("input", alertWhenTypingStops);
```

### Promise

- `resolve` 안에 우리가 `return` 할 값을 넣어주면 나중에 `then()`을 이용해서 값을 다시 받을 수 있습니다.

```jsx
resolve(data) -> then 사용
reslove() -> then 사용 하지 않음
```

- 나의 코드

```jsx
function resolveWhenPositiveNumber (number) {
    return new Promise ((resolve, reject) => {
    if (number > 0){
        resolve(`${number}은 양수입니다!`);
    } else {
        reject(`${number}은 음수입니다...`)
    }
    }
    )

}
```

### fetch는 첫번째 인자로 url, 두번째로 경로를 받아, Promise 타입의 객체를 반환한다. fetch는 String 타입이므로 json화 시켜주어야 한다.

- 나의 코드

```jsx
// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.

function func (e) {
    e.preventDefault();
    fetch('./data.json')
        .then(response => response.json())
        .then(datas => {
        
            const target = datas.find(data => inputColor.value === data.color);
            hexaCode.innerHTML = target.value;
        })
}

let inputColor = document.querySelector("#inputColor");
let inputButton = document.querySelector("#buttonSubmit");
let hexaCode = document.querySelector("#hexaCode");
inputButton.addEventListener("click", func);
```

- 나의 코드 2

```jsx
//posts 변수를 수정하지 마세요.
const posts = [
  { title: "Post 1", body: "첫번째 게시글입니다." },
  { title: "Post 2", body: "두번째 게시글입니다." },
  { title: "Post 3", body: "세번째 게시글입니다." },
  { title: "Post 4", body: "네번째 게시글입니다." },
  { title: "Post 5", body: "다섯번째 게시글입니다." },
];

function getPosts () {

    setTimeout(() => {
    let content = "";
    posts.forEach((post, index) => {content += `<li>${post.title}<br> 내용: ${post.body} </li>`})
    document.body.innerHTML = content;
    
    }, 1000);

}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      
      let error;
      try { 
      posts.push(post);
      resolve();
      } catch (err) {
       error = err;
      }
      
      if (!error) {
        resolve();
      } else {
        reject("error: wrong");
      }
      
    }, 2000);
  });
}

createPost({title: "Post N", body: "N번째 게시글입니다."})
    .then(getPosts).catch((err) => console.log(err)); 

//getPosts() 함수를 작성하세요.
//setTimeout()를 사용해서 1초 후에 posts element를 rendering 합니다.
//위에 정의된 posts 내의 게시글 제목과 내용을 forEach()을 사용해서 rendering 합니다.
//rendering 된 게시글을 document.body.innerHTML을 사용해서 html에 띄어줍니다.

//createPost() 함수를 작성하세요.
//Promise를 생성해서 resolve와 reject를 인자로 받습니다.
//Promise 내에 setTimeout으로 비동기 처리하는데, createPost()함수에 인자로 받아온 post를 push할 때 에러없이 성공적으로 호출되면(if(!error)) `resolve`를 실행하고, 그렇지 않으면 에러를 받아들이는 `reject`를 2초 후에 실행합니다.

//createPost()를 이용해 데이터를 추가해보세요.
//title은 "Post N", body는 "N번째 게시글입니다."로 설정하세요.
```

### 가짜 API 사이트

[https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)