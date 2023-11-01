const solution = (order) =>
  String(order)
    .split("")
    .filter((digit) => "369".includes(digit)).length;

// 다른 사람 풀이
function solution(order) {
  var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
  return answer;
}
