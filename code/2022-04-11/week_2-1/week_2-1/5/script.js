// 첫 번째 줄에 입력된 여러 숫자 중, "두 번째 줄에 입력된 숫자"번째로 큰 숫자를 출력하세요.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//변수 선언 
var input = [];
var count = 0;

rl.on("line", function (x) {
  //count 변수에 1 추가


  //input 배열에 x 추가

  console.log(input)
  
  //만약 count가 2이면 종료 (rl.close())

}).on("close", function () {
  //배열[0]을 split를 이용하여 배열로 변환

  console.log(input);
  // 배열[0] 값을 내림차순으로 정렬
  

  //배열[0]에 있는 배열에서 배열[1] - 1 인덱스 값을 가지고 있는 요소 출력

  
  process.exit();
});