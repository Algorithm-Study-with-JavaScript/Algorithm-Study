const solution = (board) => {
  const n = board.length;
  let safeCount = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 현재 위치가 지뢰가 아니라면 주변을 확인
      if (board[i][j] === 0) {
        //주변 8방향을 확인
        const directions = [
          [-1, -1], // 대각선 위 왼쪽
          [-1, 0], // 위쪽
          [-1, 1], // 대각선 위 오른쪽
          [0, -1], // 왼쪽
          [0, 1], // 오른쪽
          [1, -1], // 대각선 아래 왼쪽
          [1, 0], // 아래쪽
          [1, 1], // 대각선 아래 오른쪽
        ];

        let isSafe = true;

        for (const [dx, dy] of directions) {
          const ni = i + dx;
          const nj = j + dy;

          // 주변이 범위 내에 있고 지뢰가 있다면 안전지역이 아님
          if (ni >= 0 && ni < n && nj >= 0 && nj < n && board[ni][nj] === 1) {
            isSafe = false;
            break;
          }
        }

        // 안전지역이라면 safeCount 증가
        if (isSafe) {
          safeCount++;
        }
      }
    }
  }

  return safeCount;
};

// 다른 사람 풀이
function solution(board) {
  let outside = [
    [-1, 0],
    [-1, -1],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, 0],
    [1, -1],
    [1, 1],
  ];
  let safezone = 0;

  board.forEach((row, y, self) =>
    row.forEach((it, x) => {
      if (it === 1) return false;
      return outside.some(([oy, ox]) => !!self[oy + y]?.[ox + x]) ? false : safezone++;
    })
  );

  return safezone;
}
