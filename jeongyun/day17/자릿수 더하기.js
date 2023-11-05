const solution = (n) => [...String(n)].reduce((acc, value) => acc + +value, 0);

// 다른 사람 풀이
function solution(n) {
  let result = 0;

  while (n > 0) {
    result += n % 10;

    n = Math.floor(n / 10);
  }

  return result;
}
// 마지막 자리 숫자 더하기
