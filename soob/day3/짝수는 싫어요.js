// 내 풀이
function solution(n) {
  var answer = [];
  for (let i = 0; i <= n; i++) {
    if (i % 2) {
      answer.push(i);
    }
  }
  return answer;
}

//다른 사람 풀이
function solution(n) {
  var answer = [];

  for (let i = 1; i <= n; i += 2) answer.push(i);

  return answer;
}
