function solution(arr) {
  const row = arr[0].reduce((p, c) => p + c, 0);
  const column = arr.map((x) => x[0]).reduce((p, c) => p + c, 0); //map으로 각 행의 0번째 인덱스, 즉 column값을 취함
  const diagonal = arr.map((x, i) => x[i]).reduce((p, c) => p + c, 0); // 행의 index 번째 요소, 즉 대각선 요소값을 취함

  console.log(Math.max(row, column, diagonal));
}

const arr1 = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
solution(arr1);
