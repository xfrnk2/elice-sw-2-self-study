- 문서의 구조를 바꾸기 위해서는 `document.querySelector()` 를 사용한다.
    - ex) `document.querySelector('body').style.backgroundColor = 'black';`
- 태그 원소에 접근하기 위해서는 `this`를 사용한다.
    - ex) this.value = “day” // night → day로 바뀜.
    
    ```html
    <input type="button" value="night" onclick="
        if (this.value === 'night') {
        document.querySelector('body').style.backgroundColor = 'black';
        document.querySelector('body').style.color = 'white';
        this.value = 'day';
        } else {
        document.querySelector('body').style.backgroundColor = 'white';
        document.querySelector('body').style.color = 'black'; 
        this.value = 'night';
        }
        ">
    ```
    

### 팁

- git 과거 commit으로 시간여행 하는 방법 총정리 : [https://mytory.net/archives/10078](https://mytory.net/archives/10078)
- div.innerHTML → 태그 포함 모두 가져온다.
- div.innerText → 정련된 텍스트만
- dev.textContent → 텍스트만

### 메모

- classList를 통해 선택한 element에 class 이름을 부여하고, 사전에 정의되어 있는 class의 css style 속성을 그대로 부여할 수가 있다.

```html
var blockOne = document.getElementById("red");
var blockTwo = document.getElementById("yellow");
var blockThree = document.getElementById("green");

/*지시사항을 따라 작성해주세요*/

blockOne.addEventListener("mouseenter", function () {
    blockOne.classList.add("red"); //.red css style 속성이 존재
})

blockTwo.addEventListener("mouseenter", function () {
    blockTwo.classList.add("yellow"); 
})

blockThree.addEventListener("mouseenter", function () {
    blockThree.classList.add("green"); 
}
)
```

- 문장 추가와 문장 제거

```html
function myFunction() {
    let param = document.createElement("p");
    param.textContent = "이것이 추가될 문장입니다";
    document.getElementById("myDIV").appendChild(param);
}

function deleteFunction() {
    document.getElementById("myDIV").lastChild.remove();
}
```


### addEventListener의 사용 가능한 이벤트

| 이벤트 | 설명 |
| --- | --- |
| click | 클릭 시 (마우스 버튼에서 손가락을 땐 순간) |
| mouseenter | 마우수를 요소 위에 올리면 |
| mouseover | 마우스를 요소 위에 올리면 (자식 Element도 영향을 받음) |
| mouseout | 마우스가 요소 밖으로 벗어날 때 |
| mousedown | 클릭 하고 버튼에서 손가락을 때기 전 |
| focus | 포커스가 갔을 때 |
| keypress | 키를 누르는 순간에 발생, 그리고 누르고 있는 동안 계속 발생 |
| keydown | 키를 누를 때 |
| keyup | 키를 눌렀다가 떼는 순간 |
| load | 웹 페이지 소스가 다운로드 되었을 때 |
| resize | 창크기를 조절 할 때 |
| scroll | 스크롤바, 마우스 휠, up, down 버튼으로 스크롤 할 시 |
| unload | 링크를 클릭해서 다른 페이지로 이동하거나 브라우저나 브라우저 탭을 닫았을 때 |
| change | form 필드의 상태가 변경 되었을 때 |



## textContent

- 텍스트만 가져온다
- 스타일은 무시한다

## innerText

- 마크업 언어가 적용된 상태로 읽어온다
- 스타일 또한 적용된 상태로 읽기 때문에 display: none; 한 값은 가져오지 못한다

## innerHTML

- HTML 요소를 반환하거나 변경할 수 있다
- XSS 공격에 취약하니 주의