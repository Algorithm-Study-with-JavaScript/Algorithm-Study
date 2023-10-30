const solution = (numbers) => numbers.sort((a, b) => b - a)[0] * numbers[1];

// 다른 사람 풀이
function solution(numbers) {
  let [a, b] = numbers.sort((a, b) => b - a);
  return a * b;
}
