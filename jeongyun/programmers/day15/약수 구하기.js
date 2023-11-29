const solution = (n) => {
  const divisors = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
};

// 다른 사람 풀이
function solution(n) {
  return Array(n)
    .fill(0)
    .map((v, index) => v + index + 1)
    .filter((v) => n % v === 0);
}
