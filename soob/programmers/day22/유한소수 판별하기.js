// 내 풀이
function solution(a, b) {
  let x = 1;
  for (let i = 2; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      x = i;
    }
  }
  let y = b / x;
  let arr = [];
  let num = 2;
  while (y >= num) {
    if (y % num === 0) {
      arr.push(num === 2 || num === 5);
      y = y / num;
    } else num++;
  }
  return arr.some((e) => !e) ? (arr.length === 0 ? 1 : 2) : 1;
}
// 최대공약수 구함
// 분모를 최대공약수로 나눔
// 분모를 소인수 분해함
// 만약에 소인수가 2와 5인 경우에는 true를 arr에 넣어줌
// arr에 하나라도 false가 있을 경우 무한소수일 가능성 있음
// 길이가 0이면 y가 1인 경우 -> 정수 이는 유한소수로 리턴 이외 경우 무한소수 리턴

// 다른 사람 풀이
function solution(a, b) {
  let n = 1;
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) n = i;
  }

  b /= n;
  while (b % 2 === 0) b /= 2;
  while (b % 5 === 0) b /= 5;

  return b === 1 ? 1 : 2;
}
