const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let input = require("fs")
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length; i++) {
  if (input[i] === "end") break;

  const one = input[i].match(/[aeiou]/g); // 모음이 포함되어 있는지 확인
  const two = input[i].match(/([aeiou]){3}|([^aeiou]){3}/g); // 연속된 모음 또는 자음이 있는지 확인
  const three = input[i].match(/([^eo]|[^eo]e|[^eo]o)\1/g); // 'ee'와 'oo'를 제외한 모든 연속된 문자 확인

  if (one !== null && two === null && three === null) {
    console.log(`<${input[i]}> is acceptable.`);
  } else {
    console.log(`<${input[i]}> is not acceptable.`);
  }
}
