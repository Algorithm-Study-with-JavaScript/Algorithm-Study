// 내 풀이
function solution(rsp) {
  var answer = "";
  [...rsp].map((e) => {
    if (e === "2") answer = answer + "0";
    if (e === "0") answer = answer + "5";
    if (e === "5") answer = answer + "2";
  });
  return answer;
}
// rsp 배열을 돌면서 가위, 바위, 보 인지를 검사 후 이에 맞게 이길 수 있는 값을 answer 문자열에 더해준 후 answer 리턴

// 다른 사람 풀이
function solution(rsp) {
  let arr = {
    2: 0,
    0: 5,
    5: 2,
  };
  var answer = [...rsp].map((v) => arr[v]).join("");
  return answer;
}
