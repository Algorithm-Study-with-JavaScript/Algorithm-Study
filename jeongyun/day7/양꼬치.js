const solution = (n, k) => n * 12000 + (k - Math.trunc(n / 10)) * 2000;

// 다른 사람 풀이
function solution(n, k) {
  k -= ~~(n / 10);
  if (k < 0) k = 0; // 사실상 필요없음
  return n * 12000 + k * 2000;
}
