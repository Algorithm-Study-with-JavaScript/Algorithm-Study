function solution(numbers, k) {
  // 0->2
  // 0->2->4
  // 0->2->4
  return numbers[(2 * (k - 1)) % numbers.length];
}
function solution(numbers, k) {
  return numbers[(--k * 2) % numbers.length];
}
