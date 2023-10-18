// 내 풀이
function solution(num1, num2) {
  return parseInt(num1 / num2);
}

// 다른 사람 풀이

// 1. double tilde(~~)연산자
function solution(num1, num2) {
  return ~~(num1 / num2);
}

// 2. Math.trunc() - 소수점 이하는 버림
function solution(num1, num2) {
  return Math.trunc(num1 / num2);
}

// 3. Math.floor() - 내림
const solution = (num1, num2) => Math.floor(num1 / num2);

// => Math.trunc()의 경우 소수점 이하는 다 버리기 때문에 -23.2인 경우 -23을 return 함
// 하지만 Math.floor()의 경우 -23.3인 경우 내림을 하기 때문에 -24를 return 함
