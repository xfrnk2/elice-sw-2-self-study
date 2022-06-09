### 메모

- **`state`**가 변경되면 자동으로 컴포넌트가 재 렌더링된다.

## Dynamic Key

object의 값을 변겅할 때 보통 **`object.key = "value"`**와 같이 작성하지만 **`object["key"] = "value"`** 처럼 작성할 수 있으며 **`"key"`** 대신 다른 변수를 대입하여 다이나믹하게 값을 변경할 수 있습니다.

### **Dynamic key 예시**

```
const object = {
    a: "내용1",
    b: "내용2",
    c: "내용3"
}
const key = "b";
object[key] = "값 변경!"
console.log(object);// { a: "내용1", b: "값 변경!", c: "내용3" }Copy
```

이러한 Object의 특성을 이용하여 한 개의 이벤트 핸들링 함수로 여러 element의 이벤트를 처리할 수 있습니다.

## **컴포넌트의 재사용**

컴포넌트를 가지고 합성 및 추출하는 방법에 대해 알아봅시다. React에서는 컴포넌트를 적절히 합성하고 추출하여 재사용하는 것이 좋습니다. 코드의 재사용이 중요한 이유는 같은 동작을 하는 코드를 여러 번 작성한다면 코드의 가독성이 떨어지고 다른 사람이 보기에 이해하기가 어려워집니다. 또한 코드를 수정해야 할 때 여러 곳에 작성된 모든 코드를 수정하는 것은 매우 번거로운 일입니다. 따라서 가능한한 재사용 가능하도록 컴포넌트를 만들어야 합니다.

컴포넌트 합성을 이용하면 작은 기능을 하는 컴포넌트를 결합하여 더 복잡한 기능을 구축할 수 있습니다. 또한 컴포넌트 추출을 통해서는 여러 기능을 하는 컴포넌트를 작게 나눌 수 있습니다. 컴포넌트는 기능이 작을수록 재사용이 쉽기 때문에 컴포넌트의 합성과 추출이 중요합니다. 아래 예시와 함께 어떻게 하는 것인지 살펴볼까요?

### **컴포넌트 합성**

컴포넌트 안에서 다른 컴포넌트를 참조하는 것이 가능합니다. 아래 코드를 살펴볼까요? **`Question`** 함수에서 **`Elice`** 함수를 참조하고 있습니다. 참조 방식은 지금까지 사용된 것과 동일하게 DOM 태그를 이용하면 됩니다. 렌더링 할 때도 마찬가지로 DOM 태그를 이용해 호출하고 있습니다.

```
function Elice() {
  return <h2>I am a elice!</h2>;
}

function Question() {
  return (
    <div>
      <h1>Who are you?</h1>
      <Elice />
    </div>
  );
}

// index.js
ReactDOM.render(<Question />, document.getElementById("root"));
```

이어서 컴포넌트 재사용을 위한 컴포넌트 추출과 **`Props`**에 대해 알아보겠습니다.

### **컴포넌트 추출**

한 컴포넌트가 복잡하다면 일부를 추출해서 분리하는 것이 가독성이 좋고 코드 재사용이 용이합니다. 만약 아래와 같은 댓글에 대한 컴포넌트가 있다고 해봅시다.

```
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

```

댓글에는 사용자의 이미지를 띄우는 **`Avatar`**와 사용자 정보를 띄우는 **`UserInfo`**, 그리고 댓글의 내용과 날짜를 띄우는 **`Comment`**에 대한 요소로 이루어져 있습니다. 이를 3개의 컴포넌트로 아래처럼 나눌 수 있습니다.

먼저 이미지를 띄우는 부분을 **`Avatar`** 컴포넌트로 분리합니다.

```
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

```

그리고 사용자 정보를 띄우는 부분은 **`UserInfo`** 컴포넌트로 분리합니다.

```
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

```

마지막으로 댓글의 내용과 날짜를 띄우는 부분은 **`Comment`** 컴포넌트에 남겨둡니다. 처음 한 컴포넌트에 모든 내용이 있는 것보다, **`Comment`** 컴포넌트가 간단해진 것을 볼 수 있습니다.

```
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

```

## **Props**

**`Props`**는 컴포넌트로 전달되는 매개변수라고 생각하시면 됩니다. 쉽게 생각하면 함수의 매개변수라고 생각해도 좋습니다. 컴포넌트에서 어떤 값을 전달받아 처리하고 싶다면 **`Props`**를 이용해야 합니다. 그리고 컴포넌트를 호출할 때 **`Props`**를 넘겨줘야 합니다. 마치 함수 호출 시 매개변수를 전달하는 것처럼요.

아래 예제를 살펴보며 봅시다. **`Props`**는 HTML 속성을 통해 컴포넌트로 전달됩니다. 그리고 사용할 때는 중괄호를 이용해 표현하며 **`props.속성`**과 같은 형태로 호출됩니다.

```
const element = <Introduce name="Elice" />;

```

```
function Introduce() {
  return <h2>I am a {props.name}!</h2>;
}

```

단, 위의 예제는 함수형 컴포넌트이고 클래스형 컴포넌트에서 사용할 때는 **`this`**를 붙여 사용합니다.

## **State**

**`State`**는 앞서 배운 **`Props`**처럼 컴포넌트의 렌더링 결과물에 영향을 주는 데이터를 갖고 있는 객체입니다. 다만 **`Props`**는 컴포넌트에 전달되어 사용되는 반면 **`State`**는 컴포넌트 안에서 관리된다는 차이가 있습니다. 즉 **`Props`**는 함수의 매개변수처럼 사용되는 것이고 **`State`**는 함수 내에 선언된 변수처럼 사용되는 것입니다. 시간을 표시하는 코드를 가지고 **`State`**를 사용하는 방법을 차례차례 알아봅시다.

```
function tick() {
  const element = (
    <div>
      <h1>{new Date().toLocaleTimeString()}</h1>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

```

1. 위의 컴포넌트에서 현재 시간을 띄우는 코드를 따로 캡슐화하여 시간을 표시하는 부분과 분리하겠습니다. 그러기 위해 시간을 표시하는 컴포넌트에서 실제 시간을 가져올 때 앞에서 배웠던 **`Props`**를 이용하겠습니다. 참고로 이런식으로 캡슐화를 하는 경우, 시간을 표시하는 양식이 달라졌을 때 시간을 구해주는 **`tick`** 컴포넌트를 변경없이 그대로 사용할 수 있고 **`Clock`** 컴포넌트는 다른 나라의 시간을 넘겨주면 재사용이 가능합니다.

```
function Clock(props) {
  return (
    <div>
      <h1>{props.date.toLocaleTimeString()}.</h1>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);

```

1. 위에서 **`Props`**를 사용한 이유는 함수형 컴포넌트에서는 **`State`**를 사용할 수 없기 때문입니다. 따라서 함수형 컴포넌트를 클래스형 컴포넌트로 변환해보겠습니다. 클래스형 컴포넌트를 만들 때 **`React.Component`**를 상속받고 **`render()`** 메소드를 구현해야 하는 것을 유의하며 변환해야 합니다. HTML 요소 자체는 그대로 사용하면 됩니다.

```
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.date.toLocaleTimeString()}.</h1>
      </div>
    );
  }
}

```

1. 마지막으로 **`State`**로 구현한 결과를 살펴봅시다. **`render()`** 메소드에서 **`props`**를 **`state`**로 바꿔주고, 클래스 내에 초기 **`this.state`**를 지정하는 **`constructor()`**를 추가합니다. **`this.state`**에 실제 시간이 입력되어야 합니다. 그리고 실제로 렌더링을 하는 **`ReactDOM.render()`**을 작성해줍니다. 기존의 **`tick`** 컴포넌트와 다르게 더 이상 필요없는 **`date props`**는 지우고 작성하면 됩니다.

```
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>{this.state.date.toLocaleTimeString()}.</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

```

### **Props vs State**

**`Props`**와 **`State`**의 가장 큰 차이로 **`Props`**는 부모 컴포넌트에서 자식 컴포넌트로 전달하는 값으로 자식 컴포넌트에서는 **`Props`**를 직접 수정할 수 없지만 **`State`**는 컴포넌트 내부에서 선언하며 내부에서 관리되는 값으로 값을 변경할 수 있다는 점이 있습니다.

따라서 값이 변경되어야하는 상황, 예를 들면 매초 변하는 시간을 출력해야 하거나 버튼 클릭시 값이 변하는 것을 출력해야 한다면 **`State`**를 사용해야 합니다. 정리하자면 **`Props`**는 읽기 전용으로 수정이 불가능하고, **`State`**는 원하는 경우 수정이 가능하기 때문에 상황에 따라 알맞은 것을 사용하면 됩니다.