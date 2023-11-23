function solution(chicken) {
  let service = 0;
  let coupon = chicken;
  while (coupon >= 10) {
    coupon -= 10;
    service += 1;
    coupon += 1;
  }
  return service;
}
