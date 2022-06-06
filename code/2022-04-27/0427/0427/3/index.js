//randomuser.me 라는 API는 무작위로 생성된 사용자의 프로필 이미지를 포함해 디테일한 정보까지 어디서든 요청 가능합니다.

document.getElementById("myBtn").addEventListener("click", getData);

function getData() {
  // console.log('test');

  // 1. fetch()로 API를 이용합니다.
  Promise.resolve().then((data) => {
    let user = data.results;

    // 사용자 정보를 요청합니다.
    let output = "<h2><center>사용자 정보 받기</center></h2>";

    // 2. forEach()를 사용해서 user의 각 데이터를 output에 추가합니다.

    document.getElementById("output").innerHTML = output;
  });
}

async function after2Seconds() {
  setTimeout(() => {
    return "Resolved";
  }, 2000);
}

async function asyncCall() {
  console.log("calling");
  await after2Seconds().then((result) => console.log(result));
}

asyncCall();
