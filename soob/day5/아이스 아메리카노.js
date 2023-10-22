// 내 풀이
function solution(money) {
  const ICE_A = 5500;
  const num = Math.floor(money / ICE_A);
  return [num, money - ICE_A * num];
}

// 다른 사람 풀이
function solution(money) {
  return [Math.floor(money / 5500), money % 5500];
}
