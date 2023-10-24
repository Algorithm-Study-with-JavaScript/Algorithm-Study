// 내 풀이
function solution(n, k) {
  return n * 12000 + 2000 * (k - Math.floor(n / 10));
}

// 다른 사람 풀이
function solution(n, k) {
  k -= ~~(n / 10);
  if (k < 0) k = 0;
  return n * 12000 + k * 2000;
}
