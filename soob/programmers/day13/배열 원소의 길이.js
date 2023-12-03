// 내 풀이
function solution(strlist) {
  var answer = [];
  strlist.map((e) => {
    answer.push(e.length);
  });
  return answer;
}

// 다른 사람 풀이
function solution(strlist) {
  return strlist.map((el) => el.length);
}
