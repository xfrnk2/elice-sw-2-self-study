// 지시사항을 참고하여 코드를 작성하세요.
let formElement = document.querySelector("#form");
let inputElement = document.querySelector("#input");
let answerElement = document.querySelector("#answer");


let saveInputData = function (event) {
    event.preventDefault()
    answerElement.textContent = inputElement.value;
}


formElement.addEventListener("submit", saveInputData)