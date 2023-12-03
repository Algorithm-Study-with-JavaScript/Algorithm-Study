const solution = (num_list) => {
  let even = 0;
  let odd = 0;

  for (num of num_list) num % 2 === 0 ? even++ : odd++;

  return [even, odd];
};

// 다른 사람 풀이
function solution(num_list) {
  var answer = [0, 0];

  for (let a of num_list) {
    answer[a % 2] += 1;
  }

  return answer;
}
