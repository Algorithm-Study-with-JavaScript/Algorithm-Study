const solution = (s) => {
  const charCount = new Map();

  for (const char of s) {
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char) + 1);
    } else {
      charCount.set(char, 1);
    }
  }

  let uniqueChars = "";

  for (const char of s) {
    if (charCount.get(char) === 1) {
      uniqueChars += char;
    }
  }

  uniqueChars = uniqueChars.split("").sort().join("");

  return uniqueChars;
};

// 다른 사람 풀이
function solution(s) {
  let res = [];
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  return res.sort().join("");
}
