const solution = (numbers, k) => numbers[(2 * (k - 1)) % numbers.length];

// 다른 사람 풀이
function solution(numbers, k) {
  let idx = 0;
  for (let i = 1; i < k; i++) {
    idx += 2;
    if (idx > numbers.length) {
      idx %= numbers.length;
    }
  }
  return numbers[idx];
}
