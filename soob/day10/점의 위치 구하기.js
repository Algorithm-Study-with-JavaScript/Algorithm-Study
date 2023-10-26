// 내 풀이
function solution(dot) {
  return dot[0] * dot[1] > 0 ? (dot[0] > 0 ? 1 : 3) : dot[0] > 0 ? 4 : 2;
}
// 두 수를 곱한 경우 양수인지 음수인지 판별
// 만약 양수인 경우(양수,양수이거나 음수,음수) x좌표가 양수인 경우 1을 리턴, 아닌 경우 3을 리턴
// 음수인 경우(양수,음수이거나 음수,양수) x좌표가 양수인지 판별 후 양수인 경우 4를 리턴, 아닌 경우 2를 리턴

// 다른 사람 풀이
function solution(dot) {
  const [num, num2] = dot;
  const check = num * num2 > 0;
  return num > 0 ? (check ? 1 : 4) : check ? 3 : 2;
}
