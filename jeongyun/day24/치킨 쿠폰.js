const solution = (chicken) => {
  let totalChickenCount = 0;

  while (chicken >= 10) {
    totalChickenCount += Math.trunc(chicken / 10); // 쿠폰으로 받을 수 있는 치킨의 수를 더함
    chicken = Math.trunc(chicken / 10) + (chicken % 10); // 남은 쿠폰을 계산하여 다음 쿠폰의 수로 갱신
  }

  return totalChickenCount;
};

// 다른 사람 풀이
function solution(chicken) {
  var answer = parseInt((chicken - 1) / 9);
  return answer;
}
