var blockOne = document.getElementById("red");
var blockTwo = document.getElementById("yellow");
var blockThree = document.getElementById("green");

/*지시사항을 따라 작성해주세요*/

blockOne.addEventListener("mouseenter", function () {
    blockOne.classList.add("red"); 
})

blockTwo.addEventListener("mouseenter", function () {
    blockTwo.classList.add("yellow"); 
})

blockThree.addEventListener("mouseenter", function () {
    blockThree.classList.add("green"); 
}
)
