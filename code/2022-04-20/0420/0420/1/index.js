class Menu {
  handleEvent(event) {
    let method = "on" + event.type[0].toUpperCase() + event.type.slice(1);

    console.log(event.type);
    console.log(event.type[0].toUpperCase());
    console.log(event.type.slice(1));
    console.log(method);
    this[method](event);
    console.log(event);
  }

  onMousedown() {
    elem.innerHTML = "마우스 버튼을 눌렀습니다.";
  }

  onMouseup() {
    elem.innerHTML = "마우스 버튼을 뗐습니다.";
  }
}

let menu = new Menu();
const elem = document.getElementById("elem");

elem.addEventListener("mousedown", menu);
elem.addEventListener("mouseup", menu);
