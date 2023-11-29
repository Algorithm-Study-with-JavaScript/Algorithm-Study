const solution = (n) => {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    result++;

    while (String(result).includes("3") || result % 3 === 0) {
      result++;
    }
  }
  return result;
};

// 다른 사람 풀이
function solution(n) {
  return [...Array(n * 3)]
    .map((_, i) => i + 1)
    .filter((num) => num % 3 !== 0 && !num.toString().includes("3"))[n - 1];
}
