### 객체를 이용한 eventListener 인자를 호출 (함수 대신)

```jsx
class Menu {
  // 지시사항을 참고하여 코드를 작성하세요.
  handleEvent(event) {
    let method = "on" + event.type[0].toUpperCase() + event.type.slice(1);
    this[method](event);

  }

  onMousedown() {
    elem.innerHTML = "마우스 버튼을 눌렀습니다."
  }

  onMouseup() {
    elem.innerHTML = "마우스 버튼을 뗐습니다."
  }
}

let menu = new Menu();
const elem = document.getElementById("elem");
elem.addEventListener("mousedown", menu);
elem.addEventListener("mouseup", menu);
```

# [객체 형태의 핸들러와 handleEvent](https://ko.javascript.info/introduction-browser-events#ref-534)

`addEventListener`를 사용하면 함수뿐만 아니라 객체를 이벤트 핸들러로 할당할 수 있습니다. 이벤트가 발생하면 객체에 구현한 `handleEvent` 메서드가 호출됩니다.

예시:

```jsx
<button id="elem">클릭해 주세요.</button><script>
  let obj = {
    handleEvent(event) {
      alert(event.type + " 이벤트가 " + event.currentTarget + "에서 발생했습니다.");
    }
  };

  elem.addEventListener('click', obj);
</script>
```

보시다시피 `addEventListener`가 인수로 객체 형태의 핸들러를 받으면 이벤트 발생 시 `obj.handleEvent(event)`가 호출됩니다.

클래스를 사용할 수도 있습니다.

```jsx
<button id="elem">클릭해 주세요.</button><script>
  class Menu {
    handleEvent(event) {
      switch(event.type) {
        case 'mousedown':
          elem.innerHTML = "마우스 버튼을 눌렀습니다.";
          break;
        case 'mouseup':
          elem.innerHTML += " 그리고 버튼을 뗐습니다.";
          break;
      }
    }
  }

  *let menu = new Menu();
  elem.addEventListener('mousedown', menu);
  elem.addEventListener('mouseup', menu);*</script>
```

위 예시에선 하나의 객체에서 두 개의 이벤트를 처리하고 있습니다. 이때 주의할 점은 `addEventListener`를 사용할 때는 요소에 타입을 정확히 명시해 주어야 한다는 점입니다. 위 예시에서 `menu` 객체는 오직 `mousedown` 와 `mouseup`이벤트에만 응답하고, 다른 타입의 이벤트에는 응답하지 않습니다.

`handleEvent` 메서드가 모든 이벤트를 처리할 필요는 없습니다. 이벤트 관련 메서드를 `handleEvent` 에서 호출해서 사용할 수도 있습니다. 아래와 같이 말이죠,

```jsx
<button id="elem">클릭해 주세요.</button><script>
  class Menu {
    handleEvent(event) {
      // mousedown -> onMousedown
      let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
      this[method](event);
    }

    onMousedown() {
      elem.innerHTML = "마우스 버튼을 눌렀습니다.";
    }

    onMouseup() {
      elem.innerHTML += " 그리고 버튼을 뗐습니다.";
    }
  }

  let menu = new Menu();
  elem.addEventListener('mousedown', menu);
  elem.addEventListener('mouseup', menu);
</script>
```

이벤트 핸들러가 명확히 분리되었기 때문에 코드 변경이 원활해졌습니다.

# [요약](https://ko.javascript.info/introduction-browser-events#ref-535)

이벤트 핸들러는 3가지 방법으로 할당할 수 있습니다.

1. HTML 속성: `onclick="..."`.
2. DOM 프로퍼티: `elem.onclick = function`.
3. 메서드: `elem.addEventListener(event, handler[, phase])`로 핸들러를 추가하고, `removeEventListener` 로 핸들러를 제거함

HTML 속성을 이용한 이벤트 핸들러 할당은 자주 쓰이지 않습니다. HTML 태그 중간에 자바스크립트가 들어가 있으면 어색하기 때문입니다. 긴 코드를 끼워 넣는 게 불가능한 점도 이유 중 하나입니다.

DOM 프로퍼티를 사용한 방법은 괜찮습니다. 하지만 복수의 핸들러 할당이 불가능하다는 단점이 있습니다. 여러 상황에서 이런 제약이 큰 단점이 되진 않지만요.

메서드를 사용하는 방법은 가장 유연하지만, 코드는 가장 깁니다. `transitionend`와 `DOMContentLoaded`(추후 다룰 예정)같은 일부 이벤트는 이 방법으로만 처리할 수 있습니다. `addEventListener`는 객체 형태의 이벤트를 지원합니다. 이 경우엔 이벤트 발생 시 객체 안에 구현된 메서드인 `handleEvent`가 호출됩니다.

어떤 방법으로 이벤트 핸들러를 할당하던, 첫 번째 인자는 이벤트 객체입니다. 이벤트 객체는 어떤 일이 일어났는지에 대한 상세한 정보를 담고 있습니다.

다음 주제에서 이벤트에 대해 전반적인 내용과 다양한 이벤트 타입에 대해서 다루겠습니다.

[https://ko.javascript.info/introduction-browser-events](https://ko.javascript.info/introduction-browser-events)

### rest operator

- 배열 안의 원소들을 가변 인자로 받는다. → `...` ,

```jsx
let arr = [1, 2, 3]
...arr // -> 1, 2, 3
```

### rest operator를 사용한 배열 슬라이싱

You can use:

```
var head = arr[0];
var tail = arr.slice(1);

```

Or in ES6:

```
const [head, ...tail] = arr;
```

to get the lastest item

```jsx
arr.slice(-1)[0]
```

### rest parameter - 파라메터로 오는 값들을 배열로 전달 받는다

```jsx
func logger(...rest) {
	console.log(rest)
}
logger(1, 2, 3, 4, 5)
```

### 클로저란?

**자신이 선언될 당시의 환경을 기억하는 함수**

## **현지화를 위한 toLocaleString()**

먼저 `toLocaleString()`는 `Number`에서만 제공하는 것은 아니다. 다음의 객체에서도 `toLocaleString()`을 사용할 수 있는데, 사용하는 객체에 따라 내용이 조금씩 달라진다.미리 요약해서 이야기하자면 값의 타입인 `Number, Date`에 따라 달라지며, 지역에 맞춘 표현방식으로 값을 변환하여 리턴한다.

- `toLocaleString()`을 사용할 수 있는 객체
    - [Number](https://blog.munilive.com/posts/javascript-localization-with-toLocaleString.html#numberprototypetolocalesting)
    - [Date](https://blog.munilive.com/posts/javascript-localization-with-toLocaleString.html#dateprototypetolocalestring)
    - [Array](https://blog.munilive.com/posts/javascript-localization-with-toLocaleString.html#arrayprototypetolocalestring)
    - [Object](https://blog.munilive.com/posts/javascript-localization-with-toLocaleString.html#objectprototypetolocalestring)

### javascript에서 천 단위마다 , 를 찍는 방법 - toLocaleString()

### 

숫자 길이로 replace하는 방법도 있고, 여러가지가 있지만 toLocaleString이 가장 편한 방법인 것 같다.본래 용도는 이것이 아니지만, paramter값이 비어있을 때 default동작이 이렇다고 [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString#using_tolocalestring) 에 나와있다.

> In basic use without specifying a locale, a formatted string in the default locale and with default options is returned.
> 

## 결과

```
let number = 123456789;
number.toLocaleString() // "123,456,789"
```

# **substr()**

```jsx
string.substr(start, length)
```

substr() 함수는, 파라미터로 입력받은 start index부터 length 길이만큼 string을 잘라내어 반환하는 함수입니다..

첫번째 글자의 index는 0에서 시작합니다.