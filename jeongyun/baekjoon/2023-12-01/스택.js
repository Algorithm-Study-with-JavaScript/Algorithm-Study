const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const [n, ...inputs] = require("fs")
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

class Stack {
  constructor() {
    this.stack = [];
  }

  push(x) {
    this.stack.push(x);
  }

  pop() {
    return !this.stack.length ? -1 : this.stack.pop();
  }

  size() {
    return this.stack.length;
  }

  empty() {
    return !this.stack.length ? 1 : 0;
  }

  top() {
    return !this.stack.length ? -1 : this.stack[this.stack.length - 1];
  }
}

const stackObj = new Stack();
let answer = "";

inputs.forEach((command) => {
  const [cmd, num] = command.trim().split(" ");

  switch (cmd) {
    case "push":
      stackObj.push(+num);
      break;
    case "pop":
      answer += `${stackObj.pop()}\n`;
      break;
    case "size":
      answer += `${stackObj.size()}\n`;
      break;
    case "empty":
      answer += `${stackObj.empty()}\n`;
      break;
    case "top":
      answer += `${stackObj.top()}\n`;
      break;
    default:
      break;
  }
});

console.log(answer);
