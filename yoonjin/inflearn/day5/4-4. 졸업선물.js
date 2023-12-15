function solution(m, product) {
  let result = 0;

  for (let i = 0; i < product.length; i++) {
    const [price, shipping] = product[i];
    const discountedPrice = price / 2 + shipping;

    product[i][0] = discountedPrice; // 상품의 가격을 할인된 가격으로 업데이트
    product.sort((a, b) => a[0] - b[0]); // 할인된 가격 기준으로 정렬

    let totalCost = 0;
    let count = 0;

    for (let j = 0; j < product.length; j++) {
      if (totalCost + product[j][0] <= m) {
        totalCost += product[j][0];
        count++;
      } else {
        product[i][0] = price; // 다시 원래 가격으로 되돌림
        break;
      }
    }
    result = Math.max(result, count);
  }

  return result;
}

// 입력 예제에 대한 실행
console.log(
  solution(28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ]),
); // 예제 1의 출력값 출력
console.log(
  solution(41, [
    [8, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [12, 1],
  ]),
); // 예제 입력 1과 같은 출력
console.log(
  solution(41, [
    [8, 6],
    [2, 2],
    [12, 1],
    [4, 5],
    [4, 3],
  ]),
); // 예제 입력 1과 같은 출력
console.log(
  solution(33, [
    [2, 12],
    [8, 4],
    [6, 6],
    [6, 7],
  ]),
); // 예제 입력 1과 같은 출력
