### 메모

- 자바스크립트에서 일정 시간마다 반복적으로 코드를 실행하고자 할 때 사용되는 코드는 **`setInterval()`**

- 자바스크립트의 객체와 속성에 의해서, 태그 내 속성을 임시 저장/지정할 수 있다.

```jsx
car1.timer = setInterval(function () {
      car1.style.marginLeft =
        parseInt(car1.style.marginLeft) + Math.random() * 60 + "px";
      if (parseInt(car1.style.marginLeft) > window.innerWidth) {
        alert("Car 1 wins!");
        reset(car1, car2);
      }
    }, 60);
```

[https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Working_with_Objects#객체와_속성](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Working_with_Objects#%EA%B0%9D%EC%B2%B4%EC%99%80_%EC%86%8D%EC%84%B1)

- createElement로 생긴 element 객체인 경우 → deleteButton.className = 부여할 값 ; 으로 클래스 속성 부여
- 돔 객체인 경우(querySelector, getElementById 등) → deleteButton.classList.add(””)

- 부모노드.insertBefore(삽입 할 노드, 기준 점 노드), 반환값은 삽입 된 노드

### 돔 객체에 텍스트 추가하기

```jsx
var target = document.getElementById("btn");
target.innerText = "버튼 클릭 성공!";
```

### 노드에 자식 추가하기

- 텍스트 추가하기

```jsx
let li = document.createElement("li");
li.textContent = "Home";
```

- 태그 추가하기

```jsx
let div = document.createElement("div");
div.innerHTML = "<strong>안녕하세요!</strong> 예약하신 날짜입니다.";
calender.insertBefore(div, calender.firstElementChild);
```

### scale 사용 예

```jsx

const image = document.getElementsByClassName("zoom-img")[0];

function zoomIn() {
  image.style.transition = "all 0.5s";
  image.style.transform = "scale(1.2)";
}

function zoomOut() {
  image.style.transition = "all 0.5s";
  image.style.transform = "scale(0.8)";
}

image.addEventListener("mouseenter", zoomIn);
image.addEventListener("mouseout", zoomOut);
```

### 삭제 버튼이 포함된 아이템 리스트 생성 코드

```jsx
function addItem(e) {
  e.preventDefault();
  var inputValue = document.getElementById("item").value;
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(inputValue));
  
  var deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-danger btn-sm float-right delete";
  deleteButton.appendChild(document.createTextNode("삭제"));
  li.appendChild(deleteButton);
  itemList.appendChild(li);

}
```
