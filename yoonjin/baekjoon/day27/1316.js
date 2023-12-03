const readline = require('readline');

function isGroupWord(word) {
  const visited = new Set();
  let prevChar = '';

  for (let i = 0; i < word.length; i++) {
    const currentChar = word[i];

    // 현재 문자가 이전 문자와 다르면서 이미 방문한 적 있는 문자인 경우
    if (currentChar !== prevChar && visited.has(currentChar)) {
      return false; // 그룹 단어가 아님
    }

    visited.add(currentChar); // 현재 문자를 방문했다고 표시
    prevChar = currentChar;
  }

  return true; // 그룹 단어임
}

function countGroupWords(words) {
  let count = 0;

  for (const word of words) {
    if (isGroupWord(word)) {
      count++;
    }
  }

  return count;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let wordCount = 0;
const words = [];

rl.on('line', (input) => {
  if (!wordCount) {
    wordCount = parseInt(input);
    return;
  }

  words.push(input);

  if (words.length === wordCount) {
    const result = countGroupWords(words);
    console.log(result);
    rl.close();
  }
});
