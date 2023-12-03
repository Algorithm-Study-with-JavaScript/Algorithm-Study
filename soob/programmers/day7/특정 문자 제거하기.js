//내 풀이
function solution(my_string, letter) {
  const index = my_string.indexOf(letter);
  return [...my_string].filter((e) => e !== my_string[index]).join("");
}

// 다른 사람 풀이
function solution(my_string, letter) {
  const answer = my_string.split(letter).join("");
  return answer;
}
