const solution = (my_string, letter) =>
  my_string
    .split("")
    .filter((item) => item !== letter)
    .join("");

// 다른 사람 풀이
function solution(my_string, letter) {
  return my_string.replaceAll(letter, "");
}
