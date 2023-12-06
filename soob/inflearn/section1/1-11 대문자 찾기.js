// 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램을 작성하세요.

function solution(s) {
  return [...s].filter((e) => e.toUpperCase() === e).length;
}

let str = "KoreaTimeGood";
console.log(solution(str));

// 강의
function solution1(s) {
  let answer = 0;
  for (let x of s) {
    if (x === x.toUpperCase()) answer++;
  }
  return answer;
}

function solution2(s) {
  let answer = 0;
  for (let x of s) {
    // 대문자: 65~90, 소문자: 97~122
    let num = x.charCodeAt();
    if (num >= 65 && num <= 90) answer++;
  }
  return answer;
}

console.log(solution1(str));
console.log(solution2(str));
