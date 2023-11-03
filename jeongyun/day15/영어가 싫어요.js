const numberArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

const solution = (numbers) => {
  let result = "";
  let currentNumber = "";

  for (let i = 0; i < numbers.length; i++) {
    currentNumber += numbers[i];

    const numberIndex = numberArray.indexOf(currentNumber);
    if (numberIndex !== -1) {
      result += numberIndex;
      currentNumber = "";
    }
  }

  return +result;
};

// 다른 사람 풀이
function solution(numbers) {
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const num = numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (v) => {
    return obj[v];
  });

  return Number(num);
}
