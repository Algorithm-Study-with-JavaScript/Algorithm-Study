// 내 풀이
function solution(n) {
  for (let i = 1; ; i++) {
    const num = (n * i) / 6;
    if (num === Math.trunc(num)) {
      return num;
    }
  }
}

// 다른 사람 풀이
const solution = (n) => {
  let piece = 6;

  while (true) {
    if (piece % n === 0) {
      break;
    }
    piece += 6;
  }

  return piece / 6;
};
