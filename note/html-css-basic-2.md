### 오답 노트

- `<!DOCTYPE html>` 다음 `<html>`이 온다. 나는 당연히 `<html>`이 먼저 올 줄 알았다.
- 스타일 적용 우선순위는 style > id > class > type이다. 나는 당연히 가장 나중에 속성을 정의한 부분이 적용될 줄 알았다. `sict`
- 테두리 선, border 속성을 선언할 때는 border-width, border-style, border-color 순서로 작성한다. ex) 10px solid red. 나는 순서가 상관 없을 줄 알았다. `wsc`
- 배경 주소를 입려할 땐 `background-image: url(elice_logo.png);` 처럼 url과 괄호 ( ) 로 감싼다.
- **`font-family`** : 랜덤한 것이 아닌 입력한 순서대로 우선순위가 적용됨. (A B C) → A > B > C

### 웹을 구성하는 요소

웹 사이트 제작은 건물 짓기와 같고,

건물 설계도, 인테리어 디자인, 기능과 효과로 나누어 볼 수 있다. 각각 무엇에 매칭되는지는 상상해 보기를 바란다. (H, C, J로 시작)

### 웹사이트 제작시 고려사항

1. 웹 표준 (따라야 하는 기술 규격)
2. 웹 접근성 : 누구나 접근해서 이용 가능(시각장애인 등)
3. 크로스 브라우징 (모든 브라우저 환경 고려)

---

### 박스 모델

박스 모델 : 공간 설계시 구성요소를 의미 

총 4가지, margin, border, padding, content

 border 기준으로(미사용시 0일때) ▽

- margin : border 바깥쪽
- pading : border 안과 컨텐츠 사이
    - left, right, top, bottom

전체 일괄 선언시 top right bottom left 순서로 한줄 작성 가능 (12시 시계방향)

```html
div {margin: 100px 0 0 100px;}
```

### 공간을 만들 때 사용하는 태그

• **`<nav>`** – 웹사이트 내 메뉴 버튼을 담는 공간

• **`<article>`** – 문서 내에서 독립적인 컨텐츠를 위한 공간

• **`<div>`** – 임의의 공간을 담는 공간

---

### HTML 태그의 두가지 성격

- block 요소: 공간을 만드는 태그 모두 포함(h1~h6, div, header 등)
    - Y축 기준 정렬 형태이며 줄바꿈 현상이 나타남
    - width, height를 설정하여 상하 배치 작업 가능
- inline 요소:
    - X축 기준 정렬 형태이며 한 줄에 모두 출력함
    - 공간을 만들 수 없고 상하 배치 작업 불가능

### ex) block 요소와 inline 요소의 비교

![Untitled (88)](https://user-images.githubusercontent.com/34790699/161786511-440e47bb-267a-4de4-a82f-9dfdbfbb78f7.png)



---

### CSS 선택자(Selector)

- Type(태그), Class(태그 별명), Id(태그 이름)  `TCI`
    - Class는 접두문자 `.`
    - Id는 접두문자 `#`
    

### CSS 캐스캐이딩 → =우선순위 `순디선`

- 기준 : 순서, 디테일, 선택자
    - 순서 : 나중에 적용한 속성이 우위
    - 디테일 : 더 구체적으로 작성된 선택자가 우위 / ex) p, header p 라면 `p < header p`
    - 선택자 :  style > id > class > type
    
    ![Untitled (89)](https://user-images.githubusercontent.com/34790699/161786518-1b97ced6-6826-403a-873c-7d62d3ede4ba.png)


    

---

### 형제지간의 마진병합

margin-bottom과 margin-top의 관계

같은 곳을 바라보고 있을 경우 숫자가 더 큰 값이 적용된다.

ex) A의 margin-bottom: 100px, B의 margin-top: 150px 인 경우, 가리키는 곳의 마진은 150px이다. 250px이 아니다.

![Untitled (90)](https://user-images.githubusercontent.com/34790699/161786521-9fa4e81e-88da-4374-b909-cee7c480a975.png)


### 부모 자식간의 마진병합

자식에게 margin을 적용하는 순간, 부모도 margin이 적용된다.

ex) main 태그 내부에 위치한 article 태그의 style 속성으로 margin-top을 부여했다면, main도 영향을 받는다.

### 레이아웃에 영향을 미치는 속성

- display
- float
- clear

### Block과 Inline 요소의 성격을 바꾸는(↔) display

- inline, block, inline-block(두 요소의 성격을 모두 가짐)
    - **`display`**의 속성 값으로 **`inline-block`**을 적용하면, inline 요소도 block 요소처럼 **`width`**와 **`height`**을 설정할 수 있습니다.. 뿐만 아니라 동시에 inline요소의 특성도 갖게 됩니다.
    - **`inline-block`**은 내비게이션 버튼을 만들 때 주로 사용됩니다.

### 왼쪽 또는 오른쪽으로 띄워 정렬하는 float

- 이름 그대로 선택자를 띄워서 정렬시키며 left 또는 right로 레이어를 만듬
- 레이어가 겹쳐지지 않게 왼쪽에서부터 정렬하고 싶은 경우 `float: left`를 연속적으로 입력

### float의 속성을 제어하는 clear

- float 속성을 부여한 오브젝트에 의해서 다른 오브젝트가 가려지는 문제
- float이 가장 마지막으로 나오는 지점 다음에 clear를 입력하면 겹치지 않게 된다.
- both는 float left와 float right의 기능을 꺼주겠다는 의미.

### 브라우저와 공간 사이의 공백 제거

- html, body {margin:0 ; padding: 0}
- * {margin:0 ; padding: 0}
