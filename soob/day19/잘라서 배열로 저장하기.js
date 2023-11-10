// 내 풀이
function solution(my_str, n) {
  var answer = [];
  let arr = my_str.split("");
  let num = n;
  while (arr.length > 0) {
    answer.push(arr.splice(0, n).join(""));
    num = num + n;
  }
  return answer;
}

// 다른 사람 풀이
function solution(my_str, n) {
  return my_str.match(new RegExp(`.{1,${n}}`, "g"));
}
