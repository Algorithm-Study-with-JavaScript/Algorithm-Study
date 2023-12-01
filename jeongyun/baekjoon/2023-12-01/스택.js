const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const [n, ...inputs] = require("fs")
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

class Stack {
  constructor() {
    this.stack = [];
    this.topValue = -1;
  }

  push(x) {
    this.topValue++;
    this.stack[this.topValue] = x;
  }

  pop() {
    if (this.topValue === -1) {
      return -1;
    }
    const topValue = this.stack[this.topValue];
    this.topValue--;
    return topValue;
  }

  size() {
    return this.topValue + 1;
  }

  empty() {
    return this.topValue === -1 ? 1 : 0;
  }

  top() {
    return this.topValue === -1 ? -1 : this.stack[this.topValue];
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
