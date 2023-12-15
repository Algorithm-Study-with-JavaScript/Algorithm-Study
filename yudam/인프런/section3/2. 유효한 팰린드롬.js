function solution(s) {
  let mid = s.length / 2;
  let str = s.toLowerCase();

  str = str.replaceAll(/[;,:]/g, "");

  if (str.split("").reverse().join("") === str) {
    return "YES";
  }
  return "NO";
}

function solution2(s) {
  let answer = "YES";
  s = s.toLowerCase().replace(/[^a-z]/g, "");
  if (s.split("").reverse().join("") !== s) return "NO";
  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
