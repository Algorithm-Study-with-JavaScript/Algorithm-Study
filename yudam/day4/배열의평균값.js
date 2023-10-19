function solution(numbers) {

  return numbers.reduce((a, b) => a + b, 0) / numbers.length;

}

function solution(numbers) {
  var answer = 0;
  for (i of numbers) {
    answer += i
  }
  return answer / numbers.length;

}
