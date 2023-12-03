let input = require("fs")
  .readFileSync(__dirname + "/example.txt")
  .toString()
  .trim()
  .split(" ");

console.log(input[0]);
console.log(Number(input[0]) + Number(input[1]));
