function revert(arr) {
  return arr.map((e) => {
    if (e.toUpperCase() === e) {
      return e.toLowerCase();
    } else {
      return e.toUpperCase();
    }
  });
}
function solution(my_string) {
  return revert(my_string.split("")).join("");
}


//String에서도 for of 쓸 수 있다는 걸 잊지말자
function solution(my_string) {
  var answer = "";
  for (let c of my_string)
    answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
  return answer;
}
