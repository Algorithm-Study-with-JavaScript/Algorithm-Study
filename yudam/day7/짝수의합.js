function solution(n) {
  let sum = 0;
  for (let i = 0; i <= n; i += 2) {
    sum += i;
  }
  return sum;
}

function solution(n) {
  var half = Math.floor(n / 2);
  return half * (half + 1);
}
