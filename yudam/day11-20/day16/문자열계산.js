function solution(my_string) {
  const final = my_string.split(` `);

  return final.reduce((a, e, i, arr) => {
    if (e === "-") {
      return a - Number(arr[i + 1]) * 2;
    } else if (e === "+") {
      return a;
    } else {
      return a + Number(e);
    }
  }, 0);
}

function solution(my_string) {
  const stack = [];

  let sign = 1;
  for (const ch of my_string.split(" ")) {
    if (ch === "+") {
      sign = 1;
    } else if (ch === "-") {
      sign = -1;
    } else {
      stack.push(ch * sign);
    }
  }

  return stack.reduce((a, b) => a + b, 0);
}
