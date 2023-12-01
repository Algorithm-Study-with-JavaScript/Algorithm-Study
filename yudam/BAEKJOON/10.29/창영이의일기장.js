const fs = require("fs");
const input = fs
  .readFileSync(__dirname + "/example.txt")
  .toString()
  .trim()
  .split(" ");

input.forEach((str) => {
  str = str.replace(/([aeiou])(p)([aeiou])/g, "$1");
  console.log(str);
});
