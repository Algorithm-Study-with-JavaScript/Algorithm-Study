function solution(sides) {
  sides.sort((a, b) => a - b);
  if (sides[0] + sides[1] > sides[2]) {
    return 1;
  } else {
    return 2;
  }
}

function solution(sides) {
  const [long, a, b] = sides.sort((a, b) => b - a);

  return long < a + b ? 1 : 2;
}
