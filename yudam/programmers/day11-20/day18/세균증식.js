function solution(n, t) {
  let count = n;
  for (let i = 1; i <= t; i++) {
    count *= 2;
  }
  return count;
}
function solution(n, t) {
  return n * Math.pow(2, t);
}
