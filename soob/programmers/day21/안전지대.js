// 내 풀이
function solution(board) {
  const dangerousIdx = [];
  board.map((e, index) => {
    e.map((k, kIndex) => {
      if (k === 1) {
        const x = index - 1 < 0 ? 0 : index - 1;
        const xPlus = index + 1 > e.length - 1 ? e.length - 1 : index + 1;
        const y = kIndex - 1 < 0 ? 0 : kIndex - 1;
        const yPlus = kIndex + 1 > e.length - 1 ? e.length - 1 : kIndex + 1;
        dangerousIdx.push([x, y]);
        dangerousIdx.push([x, kIndex]);
        dangerousIdx.push([x, yPlus]);
        dangerousIdx.push([index, y]);
        dangerousIdx.push([index, kIndex]);
        dangerousIdx.push([index, yPlus]);
        dangerousIdx.push([xPlus, y]);
        dangerousIdx.push([xPlus, kIndex]);
        dangerousIdx.push([xPlus, yPlus]);
      }
    });
  });

  const total = board.length * board.length;

  return dangerousIdx.length === 0
    ? total
    : total - [...new Set(dangerousIdx.join("|").split("|"))].length;
}

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
      return outside.some(([oy, ox]) => !!self[oy + y]?.[ox + x])
        ? false
        : safezone++;
    })
  );

  return safezone;
}
