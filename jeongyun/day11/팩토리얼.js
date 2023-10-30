const solution = (n) => {
  let i = 1;
  let factorial = 1;

  while (factorial <= n) {
    i++;
    factorial *= i;
  }

  return i - 1;
};

// 다른 사람 풀이
function solution(n) {
  for (let i = 1, v = 1; true; v *= ++i) if (v > n) return --i;
}
