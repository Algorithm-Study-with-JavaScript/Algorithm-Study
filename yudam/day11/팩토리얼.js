function fac(n) {
  if (n <= 1) return 1;
  return Math.floor(fac(n - 1) * n);
}

function solution(n) {
  for (let i = 10; i >= 0; i--) {
    if (fac(i) <= n) {
      return i;
    }
  }
}
