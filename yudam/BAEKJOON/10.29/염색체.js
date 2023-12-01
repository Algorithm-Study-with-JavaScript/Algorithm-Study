const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let input = require("fs")
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");
const [n, ...inputs] = fs
  .readFileSync(__dirname + "/example.txt")
  .toString()
  .trim()
  .split("\n");

/^(A|B|C|D|E|F)/;
