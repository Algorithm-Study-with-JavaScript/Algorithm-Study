const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let input = require("fs")
  .readFileSync(__dirname + filePath)
  .toString()
  .trim();

const regex = new RegExp("([aeiou])p\\1", "g");

console.log(input.replace(regex, "$1"));
