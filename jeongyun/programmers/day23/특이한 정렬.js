const solution = (numlist, n) =>
  numlist.sort((a, b) =>
    Math.abs(n - a) !== Math.abs(n - b)
      ? Math.abs(n - a) - Math.abs(n - b)
      : b - a
  );

// 다른 사람 풀이
function solution(numlist, n) {
  return numlist
    .sort((a, b) => b - a)
    .sort((a, b) => Math.abs(a - n) - Math.abs(b - n));
}
