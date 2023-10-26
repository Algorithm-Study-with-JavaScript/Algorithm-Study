function solution(num_list, n) {
  let newArray = [];
  for (let i = 0; i < num_list.length; i += n) {
    newArray.push(num_list.slice(i, i + n));
  }

  return newArray;
}

function solution(num_list, n) {
  var answer = [];

  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }

  return answer;
}
