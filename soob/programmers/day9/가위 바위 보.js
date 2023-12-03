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
// arr에 가위, 바위, 보에 해당하는 수와 이를 이기는 경우에 해당하는 수를 매칭해서 선언
// 매개변수 rsp를 돌면서 arr객체에 해당값을 key값으로 가지는 value의 배열이 리턴됨
// 문자열로 리턴해야 하므로 join 메소드 사용해서 배열을 문자열로 변환 후 리턴
