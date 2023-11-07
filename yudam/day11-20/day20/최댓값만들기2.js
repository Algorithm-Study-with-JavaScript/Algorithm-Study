function solution(numbers) {
  const array = [];
  numbers.forEach((e, i) => {
    for (i + 1; i < numbers.length; i++) {
      array.push(e * numbers[i + 1]);
    }
  });
  return Math.max(...array.filter((e) => Number.isInteger(e)));
}
