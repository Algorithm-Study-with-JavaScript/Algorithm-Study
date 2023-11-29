const solution = (numbers) => {
  const total = numbers.reduce((acc, current) => acc + current, 0);

  const average = total / numbers.length;

  return Math.round(average * 10) / 10;
};

// 다른 사람 풀이
function solution(numbers) {
  var answer = 0;
  for (i of numbers) {
    answer += i;
  }
  return answer / numbers.length;
}
