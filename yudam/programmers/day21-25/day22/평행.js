function 기울기(dots1, dots2) {
  if (dots2[0] - dots1[0] === 0) {
    return 0;
  }
  return (dots1[1] - dots2[1]) / (dots2[0] - dots1[0]);
}
;

function solution(dots) {
  if (기울기(dots[0], dots[1]) === 기울기(dots[2], dots[3])) {
    return 1;
  }

  if (기울기(dots[0], dots[2]) === 기울기(dots[1], dots[3])) {
    return 1;
  }
  if (기울기(dots[0], dots[3]) === 기울기(dots[1], dots[2])) {
    return 1;
  }

  return 0;
}
