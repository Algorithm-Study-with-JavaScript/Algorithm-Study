const solution = (my_string) => my_string.replace(/[aeiou]/g, "");

// 다른 사람 풀이
function solution(my_string) {
  return Array.from(my_string)
    .filter((t) => !["a", "e", "i", "o", "u"].includes(t))
    .join("");
}
