const solution = (my_string) => [...my_string.replace(/[a-z]/g, "")].sort((a, b) => a - b).map(Number);

// 다른 사람 풀이
function solution(my_string) {
  return my_string
    .split("")
    .filter((v) => !isNaN(v))
    .map((v) => v * 1)
    .sort((a, b) => a - b);
}
