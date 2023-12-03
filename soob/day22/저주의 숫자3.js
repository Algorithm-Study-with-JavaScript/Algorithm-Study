// 내 풀이
function solution(n) {
  let num = 1;
  let count = 1;
  while (count !== n) {
    num = num + 1;
    if (num % 3 !== 0 && !num.toString().includes("3")) {
      count++;
    }
  }
  return num;
}

// 다른 사람 풀이
function solution(n) {
  return [...Array(n * 3)]
    .map((_, i) => i + 1)
    .filter((num) => num % 3 !== 0 && !num.toString().includes("3"))[n - 1];
}
