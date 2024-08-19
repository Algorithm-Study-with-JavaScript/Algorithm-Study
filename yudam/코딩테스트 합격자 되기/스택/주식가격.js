// function solution(prices) {
//   const keep = [];
//   const prices2 = prices;

//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < prices2[i]) {
//     }

//     if (i === prices.length - 1) {
//       keep.push(0);
//     }
//   }
//   return answer;
// }

// console.log(solution([1, 2, 3, 2, 3]));

function solution(prices) {
  const answer = [];

  const start = 0;

  for (let i = 1; i < prices.length; i++) {
    let point = prices[i - 1];

    if (point > prices[i]) {
      console.log("i", i);

      for (let j = start - 1; j < i; j++) {
        answer.push(i - j);
      }
      index = i;
    } else {
    }
    console.log("point", point);
    console.log("prices[i]", prices[i]);
  }
  return answer;
}

console.log(solution([1, 2, 3, 2, 3]));
