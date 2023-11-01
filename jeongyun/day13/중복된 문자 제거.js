const solution = (my_string) => [...my_string].filter((char, index, arr) => arr.indexOf(char) === index).join("");

// 다른 사람 풀이
function solution(my_string) {
  return [...new Set(my_string)].join("");
}
