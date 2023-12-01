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
input.forEach((e) => {
  if (e.includes("push")) {
    stack.push(+e.split("push ")[1]);
  }
  if (e.includes("top")) {
    console.log(stack.peek());
  }

  if (e.includes("size")) {
    console.log(stack.getSize());
  }

  if (e.includes("pop")) {
    console.log(stack.pop());
  }

  if (e.includes("empty")) {
    console.log(stack.isEmpty());
  }
});
