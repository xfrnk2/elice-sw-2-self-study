let nameElement = document.getElementById("name");
let emailElement = document.getElementById("email");
let phoneElement = document.getElementById("phone");
let containerElement = document.querySelector(".container");

function update (event) {
    event.preventDefault();
    containerElement.innerHTML = `
    <div>
    <p>
    <h1>Name : 
    ${nameElement.value}
    </h1>
    <p>
    <br>
    
    <p>
    <h1> Email :
    ${emailElement.value}
    </h1>
    </p>
    <br>

    
    <p>
    <h1>Phone : 
    ${phoneElement.value}
    </h1>
    </p>
    </div>
    `    
}




containerElement.addEventListener("submit", update)