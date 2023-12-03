const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let input = require("fs")
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const regex = new RegExp("^[A-F]?A+F+C+[A-F]?$", "g");

for (let i = 1; i <= N; i++) {
  const line = input[i];

  console.log(line.match(regex) ? "Infected!" : "Good");
}
