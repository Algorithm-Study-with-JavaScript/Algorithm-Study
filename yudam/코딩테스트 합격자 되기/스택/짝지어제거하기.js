function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const top = stack[stack.length - 1];

    if (top === s[i]) {
      stack.pop();
    }
    stack.push(s[i]);
  }

  return stack;
}

console.log(solution("baabaa"));
