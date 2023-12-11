function solution(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  // 상하좌우 방향
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let isPeak = true;

      for (const [dx, dy] of directions) {
        const newRow = i + dx;
        const newCol = j + dy;

        // 격자의 가장자리는 0으로 초기화되었다고 가정, 범위를 벗어나지 않는지 확인
        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols &&
          grid[i][j] <= grid[newRow][newCol]
        ) {
          isPeak = false;
          break;
        }
      }

      // 봉우리인 경우 count 증가
      if (isPeak) {
        count++;
      }
    }
  }

  console.log(count);
}

// 예시 입력에 대한 출력

const grid = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

solution(grid);
