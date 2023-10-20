// 내 풀이
function solution(numbers) {
  let sum = 0;
  numbers.map((e) => {
    sum = sum + e;
  });
  return sum / numbers.length;
}

// 다른 사람 풀이

function solution(numbers) {
  var answer = numbers.reduce((a, b) => a + b, 0) / numbers.length;
  return answer;
}
