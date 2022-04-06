### 팁

- emmit
    - html>body 탭
    - html>(head+body) 탭
    - h2+(ol>(li>a)*3) 탭
    - ctrl + enter (아래 한 줄 추가)
    - ctrl + shift + enter (위에 한 줄 추가)
    
    **→ `+`는 같은 레벨이고, `>`는 하위 태그 생성, `*`*는 갯수 조정***
    
- jsbin에서는 반응형 웹이 잘 작동하지만, 로컬의 vscode live server에서는 작동하지 않을 경우, `@media all and (min-width: 480px)`  아까 여기서 all빼지 않고 그대로 쓰려면 head안에 `<meta name="viewport" content="width=device-width, initial-scale=1.0">`  viewport를 설정하는 meta tag를 쓰시면 됩니다.

### 참고 사이트

- [https://stuffandnonsense.co.uk/archives/css_specificity_wars.html](https://stuffandnonsense.co.uk/archives/css_specificity_wars.html)
- [https://flukeout.github.io/](https://flukeout.github.io/)  // CSS 선택자 게임
- [https://jsbin.com/?html,output](https://jsbin.com/?html,output) // 실시간 코드 반영 에디터
- [https://flexboxfroggy.com/#ko](https://flexboxfroggy.com/#ko) // flex 트레이닝 게임

### 오답노트

- orange.small이 맞다. 나는 orange .small과 같이 가운데 띄어쓰기를 넣었는데, 틀린 답이었다.
- 특정 element 뒤에 바로 따라오는 siblings들을 선택할 수 있는 selector는 `+`,  plate 뒤에 apple이 오는 조건이 필요하다면 plate + apple 이다.
- parents element에 속해 있는 child element를 바로 선택할 수 있는 selector는 `>`이다.
- 첫번째 자식은 first-child이다. (`orange:first-child`)

### CSS 비율에 따른 레이아웃 결정 - holy grail layout with grid (+ display)

- grid-template-columns:1fr 2fr 1fr; → 1 : 2 : 1의 비율로.

```html
#container {
            display: grid;
            grid-template-columns:1fr 2fr 1fr;
        } 
```

- grid는 행 또는 열을 고정한다.
- 반대의 경우 미디어 쿼리를 사용한다.

### 반응형 웹 사이트를 만드는 기본 Media Querry
+ ex) media@ (min-width: 300px) and (max-width: 500px)
---


### 팁

- meta:vp 탭 (반응형 웹 meta태그 자동완성)
- initial-scale: 초기 배율
- **transition: 부드러운 요소 변환 효과**

```html
transition : background-color 1s;
```

- 선택자명:hover : 마우스를 위에 올린 경우
- google fonts로부터 내 취향에 맞는 font를 적용시켜보자.
- text-align은 이미지도 정렬시킨다.
- text-align은 **inline** 속성을 가진 요소를 정렬시킨다.
- • id **`main`** 하위에 태그 **`article`**과 클래스 **`first_article`**의 배경색상: #cbcae3 → `#main article.third_article` // 그냥 .third_article만 해도 상관 없지만, 혼자 프로젝트를 하는게 아니라면 명시해주는 편이 좋다.
- `div.nav>div.nav-btn*5` 탭
- inline-block 속성의 요소라면, 요소와 요소간에 white space가 존재
    
    ```html
    <div class="nav">
            <div class="nav-btn">Home</div>
            <div class="nav-btn">Contact</div>
            <div class="nav-btn">Video</div>
            <div class="nav-btn">Settings</div>
        </div>
    ```
    
    - 아래와 같이 하면 사이의 공간이 없어짐
    
    ```html
    <div class="nav">
            <div class="nav-btn">Home</div><div class="nav-btn">Contact</div>
            <div class="nav-btn">Video</div><div class="nav-btn">Settings</div>
        </div>
    ```
    
    - 또는 font-size를 0으로 하거나
    - flex를 사용하면 공간을 없앨 수 있다.

### 아이템을 컨테이너 내부 공간에 맞추기 위한 FLEX

- **justify**-**content : flex** 요소의 수평 방향 정렬 방식을 설정
- flex-wrap: 한 줄에 item을 담을 여유 공간이 없을 때 처리방식 결정 `nowrap(삐져나감)/wrap(아랫줄 추가 처리)/wrap-reverse(윗줄 추가 처리)`
- 나머지는 검색

### 번외 레이서 팁)기본값을 초기화하는 에릭 마이어의 rest css 코드

- 기본값 초기화의 필요성
- *http://meyerweb.com/eric/tools/css/reset/*