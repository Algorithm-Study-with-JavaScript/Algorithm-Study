// 내 풀이
function fac(a) {
  return a === 0 ? 1 : fac(a - 1) * a;
}

function solution(n) {
  let answer = 1;
  while (fac(answer) < n) {
    answer++;
  }
  return fac(answer) > n ? (answer = answer - 1) : answer;
}

// 다른 사람 풀이
function solution(n) {
  for (let i = 1, v = 1; true; v *= ++i) if (v > n) return --i;
}
