const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let [n, ...input] = require("fs")
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

let count = 0;
let str = "";
input.forEach((e) => {
  const splitString = e.split("");
  splitString.forEach((el) => {
    if (!str.includes(el) || str[str.length - 1] === el) {
      str += el;
    }
  });
  if (str === e) {
    count++;
  }

  str = "";
});

console.log(count);
