function solution(arr) {
  const arr2 = [];
  let sum1 = 0;
  let sum2 = 0;
  let sum4 = 0;

  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i].reduce((a, e) => a + e, 0));
    sum1 += arr[i][i];
    sum2 += arr[i][arr.length - 1 - i];
  }
  arr2.push(sum1);
  arr2.push(sum2);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      sum4 += arr[j][i];
    }

    arr2.push(sum4);
    sum4 = 0;
  }

  console.log(arr2);
  return Math.max(...arr2);
}

function solution2(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = (sum2 = 0);
  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }
  sum1 = sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
