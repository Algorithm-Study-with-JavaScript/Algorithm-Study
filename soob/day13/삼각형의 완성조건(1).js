// 내 풀이
function solution(sides) {
  sides.sort((a, b) => b - a);
  return sides[0] < sides[1] + sides[2] ? 1 : 2;
}

// 다른 사람 풀이
function solution(sides) {
  const [long, a, b] = sides.sort((a, b) => b - a);

  return long < a + b ? 1 : 2;
}
