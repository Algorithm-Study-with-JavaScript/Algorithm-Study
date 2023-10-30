function solution(box, n) {
  return box.reduce((a, e) => {
    return a * Math.floor(e / n);
  }, 1);
}
