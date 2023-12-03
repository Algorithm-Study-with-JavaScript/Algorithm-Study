const solution = (rsp) =>
  rsp
    .split("")
    .map((value) => ({ 2: 0, 0: 5, 5: 2 }[value]))
    .join("");

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
