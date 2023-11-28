function solution(numbers, direction) {
  let newArray = [];

  if (direction === "right") {
    for (let i = 0; i < numbers.length - 1; i++) {
      newArray[i + 1] = numbers[i];
      newArray[0] = numbers[numbers.length - 1];
    }
  } else if (direction === "left") {
    for (let i = 0; i < numbers.length - 1; i++) {
      newArray[i] = numbers[i + 1];
      newArray[numbers.length - 1] = numbers[0];
    }
  }

  return newArray;
}
function solution(numbers, direction) {
  var answer = [];

  if ("right" == direction) {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }

  answer = numbers;

  return answer;
}
