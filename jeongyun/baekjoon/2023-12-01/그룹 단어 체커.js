const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const [n, ...input] = require("fs")
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

let count = 0;

for (let word of input) {
  const checkedWords = new Set();
  let isGroupWord = true;

  for (let i = 0; i < word.length; i++) {
    if (word[i - 1] !== word[i] && checkedWords.has(word[i])) {
      isGroupWord = false;
      break;
    }
    checkedWords.add(word[i]);
  }

  if (isGroupWord) {
    count++;
  }
}

console.log(count);
