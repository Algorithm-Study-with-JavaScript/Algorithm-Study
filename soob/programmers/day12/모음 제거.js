// 내 풀이
function solution(my_string) {
  let str = "aeiou";
  let answer = [...my_string].filter((e) => !str.includes(e));
  return answer.join("");
}

// 다른 사람 풀이
function solution(my_string) {
  return my_string.replace(/[aeiou]/g, "");
}
