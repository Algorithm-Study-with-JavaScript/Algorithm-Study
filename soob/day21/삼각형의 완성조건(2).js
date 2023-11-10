// 내 풀이
function solution(sides) {
  const min = Math.min(sides[0], sides[1]);
  return 2 * min - 1;
}
// 다른 사람 풀이
function solution(sides) {
  return Math.min(...sides) * 2 - 1;
}
