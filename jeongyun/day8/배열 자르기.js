const solution = (numbers, num1, num2) => numbers.slice(num1, num2 + 1);

// 다른 사람 풀이
function solution(numbers, num1, num2) {
  var answer = [];

  for (let i = num1; i < num2 + 1; i++) {
    answer.push(numbers[i]);
  }

  return answer;
}
