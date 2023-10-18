// 내 풀이
function solution(numbers) {
  var answer = [];
  numbers.map((e) => {
    answer.push(e * 2);
  });
  return answer;
}

// 다른 사람 풀이
function solution(numbers) {
  return numbers.reduce((a, b) => [...a, b * 2], []);
}
