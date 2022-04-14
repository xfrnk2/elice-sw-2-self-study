### 메모

- 크롬 브라우저의 개발자 도구 > 콘솔 창에 아래를 입력한 뒤 실행해보자. 음성이 들린다.
    
    speechSynthesis.speak(new SpeechSynthesisUtterance('꼭이요!'));
    
- var 안쓰는 이유 : function scope이고, var 호이스팅 때문에.
- arr.sort() 는 아스키 문자열 기준으로 정렬이므로 숫자를 정렬하고자 할 때 원하는 결과가 보장되지 않는다. 이와 같이 사용, → arr.sort((a, b) ⇒ a - b) 또는 arr.sort((a, b) ⇒ b - a). 오름&내림차순 순
	
- 자바스크립트는 숫자 데이터 타입을 int나 double 등으로 구분하지 않고, **`Number`**
로 표기
- 문자열을 숫자로 변환하는 함수 → `Number(대상 object)`
- **`Math.random()`**은 0이상 1미만의 부동 소숫점 난수를 반환
- 소수 판별은 `isPrime(대상 숫자)`
- 문자열 일정 횟수만큼 반복은 `strObject.repeat(count);`
- 문자열 배열의 역순 정렬은 `arr.sort().reverse();`
- 자바스크립트도 문자열을 수식으로 바꾸는 `eval()`연산이 가능하다.