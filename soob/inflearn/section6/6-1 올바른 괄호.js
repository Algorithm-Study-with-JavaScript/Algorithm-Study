function solution(s) {
  let answer = 0;
  for (x of s) {
    if (x === "(") answer += 1;
    else answer -= 1;
    if (answer < 0) return "NO";
  }
  return answer === 0 ? "YES" : "NO";
}

let a = "(()()))(";
// let a = "(()(()))(()";
console.log(solution(a));

function solution1(s) {
  let answer = "YES";
  stack = [];
  for (let x of s) {
    // 여는 괄호인 경우 stack 넣음
    if (x === "(") stack.push(x);
    else {
      // 닫는 괄호의 쌍이 없는 경우 no return
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  // 여는 괄호가 남는 경우
  if (stack.length > 0) return "NO";
  return answer;
}

let a1 = "(()(()))(()";
console.log(solution1(a));
