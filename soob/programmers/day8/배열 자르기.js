// 내 풀이
function solution(numbers, num1, num2) {
  return numbers.splice(num1, num2 - num1 + 1);
}

// 다른 사람 풀이
function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}
