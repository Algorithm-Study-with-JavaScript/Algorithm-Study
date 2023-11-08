const solution = (dots) => {
  const x = dots.map((dot) => dot[0]);
  const y = dots.map((dot) => dot[1]);

  const width = Math.max(...x) - Math.min(...x);
  const height = Math.max(...y) - Math.min(...y);

  return width * height;
};

// 다른 사람 풀이
function solution(dots) {
  const x = [...new Set(dots.map((p) => p[0]))];
  const y = [...new Set(dots.map((p) => p[1]))];
  return Math.abs((x[0] - x[1]) * (y[0] - y[1]));
}
