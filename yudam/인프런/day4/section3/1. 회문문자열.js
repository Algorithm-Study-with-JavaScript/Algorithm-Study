function solution(s) {
  const str = s.toLowerCase();
  if (str.split("").reverse().join("") === str) {
    return "Yes";
  }
  return "No";
}

function solution2(s) {
  let answer = "YES";
  s = s.toLowerCase();
  let len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] !== s[len - i - 1]) return "NO";
  }
  return answer;
}

let str = "gooG";
console.log(solution(str));
