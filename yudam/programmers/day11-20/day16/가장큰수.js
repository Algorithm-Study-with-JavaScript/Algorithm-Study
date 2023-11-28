function solution(array) {
  const max = Math.max(...array);
  const answer = [max, array.indexOf(max)];

  return answer;
}

function solution(array) {
  return [
    Math.max(...array),
    array.findIndex((el) => el === Math.max(...array)),
  ];
}
