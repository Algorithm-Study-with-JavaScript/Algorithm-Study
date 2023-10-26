function solution(dot) {
  const [x, y] = dot;
  if (x > 0) {
    if (y > 0) {
      return 1;
    } else {
      return 4;
    }
  } else {
    if (y > 0) {
      return 2;
    } else {
      return 3;
    }
  }
}

function solution(dot) {
  const [num, num2] = dot;
  const check = num * num2 > 0;
  return num > 0 ? (check ? 1 : 4) : check ? 3 : 2;
}
