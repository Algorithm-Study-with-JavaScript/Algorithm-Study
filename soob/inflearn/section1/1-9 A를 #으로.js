// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 'A'를 모두 '#'으로 바꾸어 출력하느 프로그램을 작성하세요.

function solution(s) {
  return s.replaceAll("A", "#");
}

let str = "BANANA";
console.log(solution(str));

// 강의
function solution1(s) {
  let answer = "";
  for (let x of s) {
    if (x === "A") answer += "#";
    else answer += x;
  }

  return answer;
}

function solution2(s) {
  let answer = s;
  answer = answer.replace(/A/g, "#");

  return answer;
}

console.log(solution(str));
console.log(solution1(str));
console.log(solution2(str));
