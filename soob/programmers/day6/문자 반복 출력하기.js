// 내 풀이
function solution(my_string, n) {
  var answer = "";
  const arr = my_string.split("");
  arr.map((e) => {
    answer = answer + e.repeat(n);
  });
  return answer;
}

// 다른 사람 풀이
function solution(my_string, n) {
  var answer = [...my_string].map((v) => v.repeat(n)).join("");
  return answer;
}
