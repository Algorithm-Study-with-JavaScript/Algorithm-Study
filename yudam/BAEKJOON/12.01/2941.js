const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let input = require("fs")
  .readFileSync(__dirname + filePath)
  .toString()
  .trim();

const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

const reg = new RegExp(/c=|c-|dz=|d-|lj|nj|s=|z=/g);

// match 결과가 null이면 0, 아니면 match된 배열의 길이
const matchCount = (input.match(reg) || []).length;

// replaceAll 대신에 정규식을 사용하여 치환
const replacedInput = input.replace(reg, "");

console.log(matchCount + replacedInput.length);
