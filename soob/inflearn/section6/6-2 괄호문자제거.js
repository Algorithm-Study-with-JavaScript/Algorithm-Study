function solution(s) {
  const arr = s.split("");
  let flag = 0;
  let answer = [];
  arr.map((e) => {
    if (e === "(") {
      flag += 1;
      return;
    }
    if (e === ")") {
      flag -= 1;
      return;
    }
    if (flag === 0) {
      answer.push(e);
    }
  });

  return answer.join("");
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));

// 강의 풀이
function solution1(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    // 닫는 괄호일 경우 짝인 여는 괄호까지 스택에서 뺌
    if (x === ")") {
      // 여는 괄호 만날 때까지 스택에서 제거
      while (stack.pop() !== "(");
    } else stack.push(x);
  }
  answer = stack.join("");
  return answer;
}

let str1 = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution1(str));
