function sumArray(sum, ...arr) {
    // arr.length는 sum을 제외한 매개변수의 개수를 의미합니다
    if (arr.length === 0) return sum;
  
    const [head, ...tail] = arr;
  
    // arr.length는 하나씩 줄어들며, 길이가 0이 되면 합을 반환합니다.
    return sumArray(sum + head, ...tail);
  }
  sumArray(0, 1, 2, 3, 4, 5);
  
  //지시사항 1
  function mul() {
  
  }
  
  console.log(mul(3, 6, 9, 12, 15));
  
  console.log(mul(11, 13, 17, 19, 23, 29));
  
  //지시사항 2
  function multiply() {
    
  }
  
  let arr = multiply(12, 6, 4, 3, 2, 1);
  console.log(arr);
  