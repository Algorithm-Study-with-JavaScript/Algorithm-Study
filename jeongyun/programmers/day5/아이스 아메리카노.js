const solution = (money) => [Math.trunc(money / 5500), money - Math.trunc(money / 5500) * 5500];

// 다른 사람 풀이
function solution(money) {
  return [Math.floor(money / 5500), money % 5500];
}
