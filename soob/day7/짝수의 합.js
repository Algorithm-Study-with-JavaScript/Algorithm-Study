// 내 풀이
function solution(n) {
  let sum = 0;
  for (let i = 1; i < n + 1; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

// 다른 사람 풀이
function solution(n) {
  var half = Math.floor(n / 2);
  return half * (half + 1);
}
