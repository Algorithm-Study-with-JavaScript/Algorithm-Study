function solution(s) {
  const newArray = s.split(" ");
  return newArray.reduce((a, e, i, arr) => {
    if (e === "Z") {
      return a - arr[i - 1];
    } else {
      return a + Number(e);
    }
  }, 0);
}
function solution(s) {
  const stack = [];

  s.split(" ").forEach((target) => {
    if (target === "Z") stack.pop();
    else stack.push(+target);
  });

  return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
}
