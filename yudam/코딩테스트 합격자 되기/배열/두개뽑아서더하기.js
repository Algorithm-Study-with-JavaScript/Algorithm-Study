function solution(numbers) {
  const newArr = [];
  numbers.map((number, index) => {
    for (let i = index + 1; i < numbers.length; i++) {
      newArr.push(number + numbers[i]);
    }
    return newArr;
  });

  return [...new Set(newArr)].sort((a, b) => a - b);
}
