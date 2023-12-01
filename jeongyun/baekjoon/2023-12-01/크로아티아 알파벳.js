const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = require("fs")
  .readFileSync(__dirname + filePath)
  .toString()
  .trim();

const regex = /(c=|c-|dz=|d-|lj|nj|s=|z=)/g;
const matches = input.match(regex) || [];
const count = matches.length;
const otherCount = input.replace(regex, "").length;
console.log(count + otherCount);
