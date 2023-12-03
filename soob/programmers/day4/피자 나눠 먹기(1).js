// 내 풀이
function solution(n) {
  return n <= 7 ? 1 : Math.ceil(n / 7);
}

// 다른 사람 풀이
function solution(n) {
  return n % 7 === 0 ? n / 7 : parseInt(n / 7) + 1;
}
