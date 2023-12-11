/*
격자판 최대합
5*5 격자판에 아래롸 같이 숫자가 적혀있습니다. 
10 13 10 12 15
12 39 30 23 11
11 25 50 53 15
19 27 29 37 27
19 13 30 13 19
n*n의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합
니다.

▣ 입력설명
첫 줄에 자연수 n이 주어진다.(1<=n<=50) 
두 번째 줄부터 n줄에 걸쳐 각 줄에 n개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는
다. 

▣ 출력설명
최대합을 출력합니다.

▣ 입력예제 1 
5
10 13 10 12 15
12 39 30 23 11
11 25 50 53 15
19 27 29 37 27
19 13 30 13 19

▣ 출력예제 1
155

*/
const mySolution = (arr) => {
  const n = arr.length;
  let maxSum = 0;

  // 행 최대 합
  for (let i = 0; i < n; i++) {
    let rowSum = 0;
    for (let j = 0; j < n; j++) {
      rowSum += arr[i][j];
    }
    maxSum = Math.max(maxSum, rowSum);
  }

  // 열 최대 합
  for (let i = 0; i < n; i++) {
    let colSum = 0;
    for (let j = 0; j < n; j++) {
      colSum += arr[j][i];
    }
    maxSum = Math.max(maxSum, colSum);
  }

  // 좌 => 우 대각선 합
  let diagonalSum1 = 0;
  for (let i = 0; i < n; i++) {
    diagonalSum1 += arr[i][i];
  }
  maxSum = Math.max(maxSum, diagonalSum1);

  // 우 => 좌 대각선 합
  let diagonalSum2 = 0;
  for (let i = 0; i < n; i++) {
    diagonalSum2 += arr[i][n - i - 1];
  }
  maxSum = Math.max(maxSum, diagonalSum2);

  return maxSum;
};

console.log(
  mySolution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);

// 강의 풀이
function solution(arr) {
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
