function solution(numbers) {
  const array = [];
  numbers.forEach((e, i) => {
    for (i + 1; i < numbers.length; i++) {
      array.push(e * numbers[i + 1]);
    }
  });
  return Math.max(...array.filter((e) => Number.isInteger(e)));
}
function solution(numbers) {
  numbers.sort((a, b) => a - b);
  return Math.max(
    numbers[0] * numbers[1],
    numbers[numbers.length - 1] * numbers[numbers.length - 2]
  );
}
