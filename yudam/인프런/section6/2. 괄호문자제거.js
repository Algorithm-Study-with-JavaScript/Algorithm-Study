function solution(s) {
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    // 닫는 괄호가 아니면 다 푸시
    if (s[i] !== ")") {
      arr.push(s[i]);
    } // 닫는 괄호 만나면
    else if (s[i] === ")") {
      //여는 괄호 만날 때까지 pop
      while (true) {
        if (arr.pop() === "(") {
          break;
        }
      }
    }
  }
  return arr.join("");
}

function solution2(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (x === ")") {
      // 닫는 괄호면
      while (stack.pop() !== "("); // 여는 괄호가 아니면 다 pop 여는 괄호가 나오면 stop
    } else stack.push(x); // 닫는 괄호 아니면 푸시
  }
  answer = stack.join("");
  return answer;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
