function solution(number) {
  // 6을 2로 나눈 나머지를 뒤에서부터 나열
  /* 
  6 나누기 2는 3 => 나머지 0
  3 나누기 2는 1 => 나머지 1
  1 나누기 2는 0 => 나머지 1
  */

  const stack = [];
  let newNumber = number;

  while (newNumber !== 0) {
    stack.push(newNumber % 2);
    newNumber = Math.floor(newNumber / 2);
  }

  console.log(stack);
  let answer = "";

  for (let i of stack) {
    answer += i;
  }

  // while (stack.length > 0) {
  //   answer += stack.pop();
  // }

  return answer;
}

console.log(solution(27));
