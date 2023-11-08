const solution = (numbers) => {
  numbers.sort((a, b) => a - b);

  const product1 = numbers[0] * numbers[1];
  const product2 = numbers[numbers.length - 1] * numbers[numbers.length - 2];

  return Math.max(product1, product2);
};

// 다른 사람 풀이
function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] * numbers[j]);
    }
  }
  return Math.max(...answer);
}
