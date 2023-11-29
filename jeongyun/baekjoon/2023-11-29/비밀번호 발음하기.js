const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let input = require("fs")
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length; i++) {
  if (input[i] === "end") break;

  const hasVowel = input[i].match(/[aeiou]/g);
  const hasConsecutiveVowelsOrConsonants = input[i].match(
    /([aeiou]){3}|([^aeiou]){3}/g
  );
  const hasConsecutiveLetters = input[i].match(/([adf-np-z])\1/g);

  if (
    hasVowel !== null &&
    hasConsecutiveVowelsOrConsonants === null &&
    hasConsecutiveLetters === null
  ) {
    console.log(`<${input[i]}> is acceptable.`);
  } else {
    console.log(`<${input[i]}> is not acceptable.`);
  }
}
