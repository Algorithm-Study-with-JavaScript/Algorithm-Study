// 내 풀이
function solution(dots) {
  const [xMin, xMax] = [
    ...new Set(dots.map((e) => e[0]).sort((a, b) => a - b)),
  ];
  const [yMin, yMax] = [
    ...new Set(dots.map((e) => e[1]).sort((a, b) => a - b)),
  ];
  return (xMax - xMin) * (yMax - yMin);
}

// 다른 사람 풀이
function solution(dots) {
  let x = [],
    y = [];

  for (let pos of dots) {
    x.push(pos[0]);
    y.push(pos[1]);
  }

  return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
}
