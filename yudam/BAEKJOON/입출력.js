const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let input = require("fs")
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

// 1. 입력값이 한 개일 때(한 줄)
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let input = require("fs")
  .readFileSync(__dirname + filePath)
  .toString()
  .trim();

// 2. 입력값이 여러 개일 때(한 줄에 공백으로 구분)
/* ex)
110 78 158
*/

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let input = require("fs")
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split(" ");

// 3. 입력값이 여러 줄일 때
/* ex)
110
78
158
*/
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let input = require("fs")
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");
// 4. 입력값이 첫 번째 줄에는 입력 값의 길이(n), 두 번째 줄에 공백으로 구분된 입력값이 주어질 때
/* ex)
3
110 78 158
*/

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let [n, input] = require("fs")
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

input = input.trim().split(" ");

// 5. 입력값이 첫 번째 줄에는 입력 값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
/* ex)
3
110
78
158
*/

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let [n, ...input] = require("fs")
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");
console.log(n, input);
