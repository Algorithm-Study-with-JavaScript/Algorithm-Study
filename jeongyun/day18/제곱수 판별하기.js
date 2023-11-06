const solution = (n) => (Number.isInteger(Math.sqrt(n)) ? 1 : 2);

// 다른 사람 풀이
function solution(n) {
  return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}
