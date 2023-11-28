function solution(chicken) {
  let service = 0;

  // 초기 쿠폰 수는 치킨 수랑 같음
  let coupon = chicken;

  // 쿠폰이 10장 이상이면 서비스를 받을 수 있음
  while (coupon >= 10) {
    // 서비스 하나에 쿠폰 10개 차감
    coupon -= 10;
    service += 1;

    // 서비스 하나에 쿠폰 하나 추가
    coupon += 1;
  }
  return service;
}

function solution(chicken) {
  var answer = parseInt((chicken - 1) / 9);
  return answer;
}
// 10 - 1 y = Math.floor((x-1)/9) O(1);
// 19 - 2
// 28 - 3
// ans = Math.floor ( )