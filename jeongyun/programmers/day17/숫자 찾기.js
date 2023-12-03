const solution = (num, k) => String(num).indexOf(String(k)) + 1 || -1;

// 다른 사람 풀이
function solution(num, k) {
  var answer = num.toString();
  if (answer.includes(k)) {
    return answer.indexOf(k) + 1;
  } else {
    return -1;
  }
}
