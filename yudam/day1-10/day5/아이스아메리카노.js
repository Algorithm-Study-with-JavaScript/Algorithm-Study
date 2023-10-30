function solution(money) {
  return [Math.floor(money / 5500), money % 5500]
}

function solution(money) {
  let count = 0;
  while (money >= 5500) {
    money -= 5500;
    count++
  }
  return [count, money]
}