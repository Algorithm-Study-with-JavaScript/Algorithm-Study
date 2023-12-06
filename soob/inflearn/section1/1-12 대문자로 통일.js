// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력하는 프로그램을 작성하세요.

function solution(s) {
  return [...s].reduce((acc, el) => {
    return (acc = acc + el.toUpperCase());
  }, "");
}

let str = "ItisTimeToStudy";
console.log(solution(str));

// 강의
function solution1(s) {
  let answer = "";
  for (let x of s) {
    if (x === x.toLowerCase()) answer += x.toUpperCase();
    else answer += x;
  }
  return answer;
}

function solution2(s) {
  let answer = "";
  for (let x of s) {
    let num = x.charCodeAt();
    // 대문자와 소문자 아스키 코드 차이 32
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    else answer += x;
  }
  return answer;
}

console.log(solution1(str));
console.log(solution2(str));
