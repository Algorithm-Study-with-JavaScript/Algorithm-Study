function solution(board) {
  const n = board.length;
  let safeCount = 0;

  // 8 방향 확인을 위한 방향 배열
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  // 각 칸을 확인하면서 안전한 지역인지 판단
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 현재 칸이 지뢰가 없는 경우
      if (board[i][j] === 0) {
        let isSafe = true;

        // 주변 8방향 확인
        for (const [dx, dy] of directions) {
          const nx = i + dx;
          const ny = j + dy;

          // 주변 칸이 배열 범위 내에 있고 지뢰가 있는 경우
          if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
            isSafe = false;
            break; // 안전하지 않으면 더 이상 확인하지 않고 break
          }
        }

        // 안전한 경우 안전한 지역 카운트 증가
        if (isSafe) {
          safeCount++;
        }
      }
    }
  }

  return safeCount;
}

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
      // 그 중 하나라도 함수가 true를 반환하면 some 메서드도 true를 반환
      // 8개 방향 중 값이 하나라도 존재하면(1이 true, 0이 false이기에) false(비안전지대)
      // !!self[oy + y] && !!self[oy + y][ox + x]
      return outside.some(([oy, ox]) => !!self[oy + y]?.[ox + x])
        ? false
        : safezone++;
    })
  );

  return safezone;
}
