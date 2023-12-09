function solution(arr) {
  let len = arr[0].length * 2;
  const arr2 = [];

  let sum1,
    sum2,
    sum3,
    sum4 = 0;
  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i].reduce((a, e) => a + e, 0));
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      sum4 += arr[j][i];
    }

    arr2.push(sum4);
    sum4 = 0;
  }

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][i];
  }
  arr2.push(sum);
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][arr.length - 1 - i];
  }
  arr2.push(sum);
  console.log(arr2);
  return Math.max(...arr2);
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
