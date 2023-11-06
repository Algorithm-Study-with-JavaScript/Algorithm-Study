// 내 풀이
function solution(n, t) {
  return n * 2 ** t;
}

// 다른 사람 풀이
function solution(n, t) {
  return n * Math.pow(2, t);
}
// Math.pow()는 제곱한 값을 반환함
// base값이 음수이고 지수값이 정수가 아니 ㄴ경우 결과는 NaN을 반환함
