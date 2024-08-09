function solution(s) {
  let array = [];
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === ")") {
      array.pop();
    } else if (s[i] === "(") {
      array.push("(");
    }
  }

  return array.length === 0;
}

console.log(solution("(())()"));
