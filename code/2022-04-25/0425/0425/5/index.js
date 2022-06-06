// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.

function showHexaCode(e) { 
    // 새로고침 방지
  
    e.preventDefault()
    
    const userInputColor = inputElem.value 
    
    // fetch -> response.json() 하는 과정은 고정입니다 (번거롭지만, 매번 해 주어야 함).
    // 물론 response 대신 res 등으로 변수명은 바꾸어도 됩니다.
    fetch('data.json')
      .then(res => res.json())
      .then(datas => {
        // 배열의 요소 중, color 가, 사용자가 입력한 색과 일치하는 요소를 찾음. 
        const foundData = datas.find(data => data.color === userInputColor)
        
        // 찾은 요소는 객체인데, 그 value값이 헥사코드임.
        hexaCodeElem.innerHTML = foundData.value
        
        // 참고로, 아래 코드를 추가하면 색상도 반영됨 (채점과는 무관합니다).
        hexaCodeElem.style.color = foundData.value
      })
    
  }
  
  
  const inputElem = document.querySelector('#inputColor')
  const buttonElem = document.querySelector('#buttonSubmit')
  const hexaCodeElem = document.querySelector('#hexaCode')
  
  buttonElem.addEventListener("click", showHexaCode)