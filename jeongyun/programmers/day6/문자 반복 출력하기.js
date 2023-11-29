const solution = (my_string, n) => {
  let result = "";
  for (const string of my_string) {
    result += string.repeat(n);
  }
  return result;
};

// 다른 사람 풀이
function solution(my_string, n) {
  var answer = [...my_string].map((v) => v.repeat(n)).join("");
  console.log(answer);
  return answer;
}
