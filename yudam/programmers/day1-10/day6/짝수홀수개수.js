function solution(num_list) {
  let answer = [0, 0]
  for (let e of num_list) {
    answer[e % 2] += 1;
  }
  return answer;
}


function solution(num_list) {
  return [
    num_list.filter((num) => num % 2 === 0).length,
    num_list.filter((num) => num % 2 === 1).length,
  ];
}