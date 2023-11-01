// 내 풀이
function solution(my_string) {
  return [...my_string]
    .map((e) => {
      return e.toUpperCase() !== e ? e.toUpperCase() : e.toLowerCase();
    })
    .join("");
}

// 다른 사람 풀이
function solution(my_string) {
  var answer = "";
  for (let c of my_string)
    answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
  return answer;
}
