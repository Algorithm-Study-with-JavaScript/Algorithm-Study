// 내 풀이
function solution(num_list) {
  let odd = 0;
  let even = 0;
  num_list.map((e) => (e % 2 ? (odd += 1) : (even += 1)));
  return [even, odd];
}

// 다른 사람 풀이
function solution(num_list) {
  var answer = [0, 0];

  for (let a of num_list) {
    answer[a % 2] += 1;
  }

  return answer;
}
