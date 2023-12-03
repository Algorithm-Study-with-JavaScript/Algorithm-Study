const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let [document, word] = require("fs")
  .readFileSync(__dirname + filePath)
  .toString()
  .split("\n");

const regex = new RegExp(`(?=${word})(${word})`, "g");
const matches = document.match(regex);
const result = matches ? matches.length : 0;

console.log(result);
