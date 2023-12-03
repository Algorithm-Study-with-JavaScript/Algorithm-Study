// 내 풀이
function solution(num_list) {
  return num_list.reverse();
}

// 다른 사람 풀이
function solution(num_list) {
  var answer = [];
  var j = num_list.length;
  for (var i = 1; i <= j; i++) {
    answer.push(num_list[j - i]);
  }
  return answer;
}
