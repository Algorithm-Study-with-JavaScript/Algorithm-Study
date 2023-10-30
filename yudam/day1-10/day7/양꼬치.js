function solution(n, k) {
  let service = Math.floor(n / 10);

  return 12000 * n + 2000 * k - service * 2000;
}

function solution(n, k) {
  k -= ~~(n / 10);
  if (k < 0) k = 0;
  return n * 12000 + k * 2000;
}
