function solution(dots) {
  let x;
  let y;
  for (let i = 0; i < 4; i++) {
    if (dots[0][0] !== dots[i][0]) {
      x = i;
    }
    if (dots[0][1] !== dots[i][1]) {
      y = i;
    }
  }
  return Math.abs(dots[0][0] - dots[x][0]) * Math.abs(dots[0][1] - dots[y][1]);
}
function solution(dots) {
  let x = [],
    y = [];

  for (let pos of dots) {
    x.push(pos[0]);
    y.push(pos[1]);
  }

  return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
}
