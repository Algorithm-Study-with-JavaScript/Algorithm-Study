function isCorrect(rotatedArray) {
  const stack = [];
  for (let i = 0; i < rotatedArray.length; i++) {
    if (rotatedArray[i] === ")") {
      const element = stack.pop();
      if (element !== "(") {
        return false;
      }
    } else if (rotatedArray[i] === "]") {
      const element = stack.pop();
      if (element !== "[") {
        return false;
      }
    } else if (rotatedArray[i] === "}") {
      const element = stack.pop();
      if (element !== "{") {
        return false;
      }
    } else if (
      rotatedArray[i] === "(" ||
      rotatedArray[i] === "[" ||
      rotatedArray[i] === "{"
    ) {
      stack.push(rotatedArray[i]);
    }
  }

  console.log(stack);
  return stack.length === 0 ? true : false;
}
function solution(string) {
  const rotatedArray = string.split("");

  let answer = 0;

  console.log(rotatedArray);
  console.log(isCorrect(rotatedArray));
  for (let i = 0; i < string.length - 1; i++) {
    if (isCorrect(rotatedArray)) {
      answer = answer + 1;
    }
    rotatedArray.push(rotatedArray.shift());
  }

  return answer;
}

console.log(solution("[](){}"));
