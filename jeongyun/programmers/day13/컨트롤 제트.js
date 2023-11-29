const solution = (s) =>
  s
    .split(" ")
    .reduce((acc, value) => (value === "Z" ? acc.slice(0, -1) : [...acc, +value]), [])
    .reduce((sum, num) => sum + num, 0);

// 다른 사람 풀이
function solution(s) {
  const stack = [];

  s.split(" ").forEach((target) => {
    if (target === "Z") stack.pop();
    else stack.push(+target);
  });

  return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
}

//e.g. 20 Z = 20 - 20 = 0
