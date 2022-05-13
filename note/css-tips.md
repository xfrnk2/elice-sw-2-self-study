## **1. flexbox 란**

---

flexbox란, div 요소를 활용한 레이아웃 구성에 자주 사용되는 개념입니다.**`display: flex`** 로 시작되며, 아래와 같은 디자인을 구현해 줍니다.

1. div 안에 div를 센터링하기 (수평, 수직 센터링 모두)
2. div 안에 div들을 나열하고, 해당 div들 사이에 적당한 간격을 주어 레이아웃 구성하기

**(1) 센터링 예시**

예를 들어, 아래의 센터링을 구현한다고 해 보겠습니다.

![https://cdn-api.elice.io/api-attachment/attachment/083db1959a134eb78247eb9fba1ae523/image.png](https://cdn-api.elice.io/api-attachment/attachment/083db1959a134eb78247eb9fba1ae523/image.png)

위 센터링 구현은, **div를 2개** 만들면 됩니다.부모 div(예를 들어 container)와, 자식 div(예를 들어 item) 입니다.

> index.html
> 

```
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css" />
    <title>Flexbox 연습</title>
  </head>
  <body>
    <! -- div 2개 -->
    <div class="container">
      <div class="item-1">아이템1</div>
    </div>
  </body>
</html>

```

> style.css
> 

```
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 600px;

  background-color: yellow;
  font-size: 2rem;
}

.item-1 {
  width: 200px;
  border: 3px solid #333;
  background-color: lightblue;
  height: 100px;
}

```

위 css는 아래와 같이 설명됩니다.

![https://cdn-api.elice.io/api-attachment/attachment/b3466efbdb1240828f84805f5d6929f5/image.png](https://cdn-api.elice.io/api-attachment/attachment/b3466efbdb1240828f84805f5d6929f5/image.png)

즉, 자식 div를 센터링하기 위해, **부모 div는 하기 3개만** 있으면 됩니다.

1. display: flex
2. justify-content: center
3. align-items: center

**(2) div 안에 여러 개의div들 나열하기**

이제 위 코드에서 자식 div를 1개 -> 3개 div로 늘려보겠습니다.(부모 container의 width도 600px -> 1000px로 늘렸습니다)

그러면 하기와 같습니다.

![https://cdn-api.elice.io/api-attachment/attachment/a08d74235a804924809a34628047040c/image.png](https://cdn-api.elice.io/api-attachment/attachment/a08d74235a804924809a34628047040c/image.png)

- index.html
- style.css

이제 여기서, 자식 div들 사이에 간격을 만들어 보겠습니다.margin 안 써도 됩니다. justify-content: space-between 을 씁니다.

```
justify-content: center;
```

에서,

```
justify-content: space-between;
```

으로 바꾸기만 하면 됩니다.

(말 그대로, 사이 간격을 만듭니다)

![https://cdn-api.elice.io/api-attachment/attachment/0d5df2a0cd374502a5a1d2c012a2db07/image.png](https://cdn-api.elice.io/api-attachment/attachment/0d5df2a0cd374502a5a1d2c012a2db07/image.png)

이제, 맨 양 끝에도 간격이 생기도록 해 보겠습니다.

**`justify-content: center;`** 에서, **`justify-content: space-around;`**으로 바꾸기만 하면 됩니다.(말 그대로, 사이 **+ 주변**에 간격을 만듭니다.

![https://cdn-api.elice.io/api-attachment/attachment/73c7c24acd7f46599571e0237f1bf677/image.png](https://cdn-api.elice.io/api-attachment/attachment/73c7c24acd7f46599571e0237f1bf677/image.png)

마지막으로, flexbox는 아래와 같은 효과가 있습니다.

### **반응형이다.**

아래와 같이, 인터넷 창 너비를 따라 자동으로 간격이 조정됩니다.

![https://cdn-api.elice.io/api-attachment/attachment/7c671f5c066d4afca615abd9e737f93e/13.gif](https://cdn-api.elice.io/api-attachment/attachment/7c671f5c066d4afca615abd9e737f93e/13.gif)

## **2. flexbox 추가 지식**

---

flexbox에서는, 별도 설정(flex-direction)을 안 하면 다음과 같습니다.**부모 div에서** 하기와 같습니다. (앞선 자료와 동일 사진임)

![https://cdn-api.elice.io/api-attachment/attachment/b3466efbdb1240828f84805f5d6929f5/image.png](https://cdn-api.elice.io/api-attachment/attachment/b3466efbdb1240828f84805f5d6929f5/image.png)

1. justify-content: 수평 레이아웃에 관여함.
2. align-items: 수직 레이아웃에 관여함.
- 참고(flex-direction)
    
    ```
    
    ```
    
    ![https://cdn-api.elice.io/api-attachment/attachment/d38d20e6e84d42639d318469c8f22be2/image.png](https://cdn-api.elice.io/api-attachment/attachment/d38d20e6e84d42639d318469c8f22be2/image.png)
    

**이제 자식 div를 건드려 보겠습니다.**자식 div에 아래와 같이 css를 추가하면, 여러 가지 레이아웃 변화가 일어납니다.

**(1) 자식 div 건드려서 수평 레이아웃 바꿔보기**

flexbox-item-1에

```
flex-grow: 1;
```

만 추가하면 됩니다.

![https://cdn-api.elice.io/api-attachment/attachment/8b899e063cae4aed983e1ec38c4784ff/image.png](https://cdn-api.elice.io/api-attachment/attachment/8b899e063cae4aed983e1ec38c4784ff/image.png)

- style.css

flex-grow는 말 그대로, 쭉 늘어난다는 뜻입니다.빈 공간이 있으면, 빈 공간만큼 늘어납니다.

기본 값은 0 입니다.**다른 div들(아이템2, 아이템3)은 값이 0인데, 아이템1만 1이므로, 숫자가 더 큽니다.**

따라서, 1이 쭉 늘어납니다.

**(2) 자식 div 건드려서 수직 레이아웃 바꿔보기**

flexbox-item-1에

```
align-self: start;
```

만 추가하면 됩니다.

![https://cdn-api.elice.io/api-attachment/attachment/2b4b89848455459a9068caaf0a697ac7/image.png](https://cdn-api.elice.io/api-attachment/attachment/2b4b89848455459a9068caaf0a697ac7/image.png)

- style.css

말 그대로, **수직 레이아웃(align)에서, 자기 자신(self)을, 시작 위치(start)에 둔다**는 것입니다.수직의 시작 위치이므로, 꼭대기입니다.

**`align-self: end;`**면, 바닥입니다.

![https://cdn-api.elice.io/api-attachment/attachment/1bc75b3e8ec842238cfb7afff6d9bd9e/image.png](https://cdn-api.elice.io/api-attachment/attachment/1bc75b3e8ec842238cfb7afff6d9bd9e/image.png)

이렇게, **flexbox는 div들을 이용한 레이아웃**을 위해 쓰이며, 매우 자주 쓰입니다.youtube나 블로그 등을 검색하시면서, 시간 되실 때 공부해 보세요.

또한, **꼭 로컬에서 VSCode로 직접 코드를 쓰면서** 확인해 보세요.