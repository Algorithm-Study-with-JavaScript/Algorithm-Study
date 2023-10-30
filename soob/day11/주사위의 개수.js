// 내 풀이
function solution(box, n) {
  return (
    Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n)
  );
}

// 다른 사람 풀이
function solution(box, n) {
  return box.reduce((acc, v) => acc * Math.floor(v / n), 1);
}
