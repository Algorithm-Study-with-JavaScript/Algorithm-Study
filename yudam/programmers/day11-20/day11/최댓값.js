function solution(numbers) {
  let max = Math.max(...numbers);
  numbers.splice(numbers.indexOf(max), 1);
  return max * Math.max(...numbers);
}
function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}
