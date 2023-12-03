// 내 풀이
function solution(n) {
  let num = 1;
  while (num * num <= n) {
    if (num * num === n) {
      return 1;
    }
    num++;
  }
  return num === 1 ? 1 : 2;
}
// num*num이 n보다 작거나 같을 때까지 반복
// num*num이 n과 동일하면 1을 리턴
// 결과적으로 num이 1이면 1을 리턴 1이 아닌 경우에는 제곱수가 아니므로 2를 리턴

// 다른 사람 풀이
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}
// Math.sqrt()는 주어진 숫자에 루트를 씌운 수를 반환
// Number.isInteger는 주어진 값이 정수인지 판별
// 만약 n이 제곱수가 아닌 값이라면 isInteger에서 false가 반환됨
// 이 결과를 가지고 최종 결과 리턴
