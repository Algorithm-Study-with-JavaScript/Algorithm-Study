// 내 풀이
function solution(num_list, n) {
  var answer = [];
  num_list.reduce((acc, el, i) => {
    const a = [...num_list].splice(acc, n);
    if (a.length > 0) answer.push(a);
    return acc + n;
  }, 0);
  return answer;
}

// 다른 사람 풀이
function solution(num_list, n) {
  var answer = [];

  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }

  return answer;
}
