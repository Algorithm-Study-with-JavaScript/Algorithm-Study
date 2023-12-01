const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let [n, ...input] = require("fs")
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

class Stack {
  constructor() {
    // item들을 받을 배열 생성
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (!this.getSize()) {
      return -1;
    }
    return this.items.pop();
  }

  peek() {
    if (this.items.length === 0) {
      return -1;
    }

    return this.items[this.items.length - 1];
  }

  getSize() {
    return this.items.length;
  }

  isEmpty() {
    if (this.getSize() === 0) {
      return 1;
    }
    return 0;
  }
}

const stack = new Stack();
let result = "";
input.forEach((e) => {
  if (e.includes("push")) {
    stack.push(+e.split("push ")[1]);
  }
  if (e.includes("top")) {
    result += `${stack.peek()}\n`;
  }

  if (e.includes("size")) {
    result += `${stack.getSize()}\n`;
  }

  if (e.includes("pop")) {
    result += `${stack.pop()}\n`;
  }

  if (e.includes("empty")) {
    result += `${stack.isEmpty()}\n`;
  }
});

console.log(result);
