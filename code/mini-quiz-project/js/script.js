let quizs = [
    {
        question: "What is 1 + 1?",
        choice1: "2",
        choice2: "4",
        choice3: "5",
        choice4: "7",
        answer: 1
    },
    {
        question: "What is 2 + 3?",
        choice1: "1",
        choice2: "5",
        choice3: "10",
        choice4: "11",
        answer: 2
    },
    {
        question: "What is 3 + 7?",
        choice1: "20",
        choice2: "30",
        choice3: "10",
        choice4: "14",
        answer: 3
    },
    {
        question: "What is 9 + 9?",
        choice1: "12",
        choice2: "20",
        choice3: "27",
        choice4: "18",
        answer: 4
    }
  ];

  function scoreUpdate(isValid) {
    if (isValid) {
      score++;
      scoreElement.innerHTML = score;
        }
    }

  function checkAnswer(answer, selected) {   
    condition = answer === selected;
    if (condition) {
        let choiceElement = document.querySelector(`.child${answer}`);
        choiceElement.style.backgroundColor = "green";
    } else {
        let choiceElement = document.querySelector(`.child${selected}`);
        choiceElement.style.backgroundColor = "red";
    }
    
    setTimeout(function () {
        scoreUpdate(condition);
        updatePage();
    }, 1000);
    }




  let bodyElement = document.querySelector("body");
  let firstContainer = document.querySelector(".first-container");
  let secondContainer = document.querySelector(".second-container");
  let scoreElement = document.querySelector(".score");
  let questionPElement = document.querySelector(".question-p");
  let questionElement = document.querySelector(".question");
  let choiceElement = document.querySelector(".choices");
  let meterElement = document.querySelector(".meter");

  


  let meter = [30, 50, 70, 100];
  let score = 0;
  let i = 0;
  function updatePage () {
    if (3 < i) {
        bodyElement.innerHTML = `
        <h1 class="result"> Total score: ${score}</h1>
        <a href="quiz.html"><button class="start-btn" >Play Again</button></a>
      `;
    return;
    }
    questionElement.innerHTML = quizs[i].question;
    questionPElement.innerHTML = `Question ${i + 1}/4`;
    scoreElement.innerHTML = score;
    meterElement.setAttribute("value", meter[i]);
    choiceElement.innerHTML = `
    <div class="parent">
        <div class="child1" onclick="checkAnswer(${quizs[i].answer}, 1)"><div class="child-inner">A</div>${quizs[i].choice1}</div>
        <div class="child2" onclick="checkAnswer(${quizs[i].answer}, 2)"><div class="child-inner">B</div>${quizs[i].choice2}</div>
        <div class="child3" onclick="checkAnswer(${quizs[i].answer}, 3)"><div class="child-inner">C</div>${quizs[i].choice3}</div>
        <div class="child4" onclick="checkAnswer(${quizs[i].answer}, 4)"><div class="child-inner">D</div>${quizs[i].choice4}</div>
    </div>
`;
  i++;
  }
  
