function solution(m, product) {
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  // console.log(product); //[ [ 2, 2 ], [ 4, 3 ], [ 4, 5 ], [ 6, 6 ], [ 10, 3 ] ]

  let answer = [];
  let count = 0;
  let salePrice = 0;
  for (let i = 0; i < product.length; i++) {
    const [a, b] = product[i];
    salePrice = a / 2 + b;

    let remainBudget = m - salePrice;
    count++;

    for (let j = 0; j < product.length; j++) {
      if (j === i) continue;
      const [c, d] = product[j];
      remainBudget -= c + d;
      console.log("remainBudget", remainBudget);
      if (remainBudget >= 0) {
        count++;
      } else {
        break;
      }
    }
    answer.push(count);
    console.log(count);
    count = 0;
  }
  return Math.max(...answer);
}

let arr = [
  [2, 12],
  [8, 4],
  [6, 6],
  [6, 7],
];
console.log(solution(33, arr));
