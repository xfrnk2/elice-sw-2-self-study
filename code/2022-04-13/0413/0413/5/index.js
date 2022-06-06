function myFunction() {
    let param = document.createElement("p");
    param.textContent = "이것이 추가될 문장입니다";
    document.getElementById("myDIV").appendChild(param);
}

function deleteFunction() {
    document.getElementById("myDIV").lastChild.remove();
}