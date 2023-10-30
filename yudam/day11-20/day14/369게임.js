function solution(order) {
  let orderArray = Array.from(String(order));
  return orderArray.reduce((a, e) => {
    if (Number(e) % 3 === 0 && Number(e) !== 0) {
      a++;
    }
    return a;
  }, 0);
}
