function solution(angle) {
  return angle < 90
    ? 1
    : angle === 90
    ? 2
    : angle < 180
    ? 3
    : angle === 180
    ? 4
    : null;
}


// filter는 조건에 일치하는 값만 리턴 경계가 되는 값이 0, 90, 91, 180
function solution(angle) {
  return [0, 90, 91, 180].filter((x) => angle >= x).length;
}
