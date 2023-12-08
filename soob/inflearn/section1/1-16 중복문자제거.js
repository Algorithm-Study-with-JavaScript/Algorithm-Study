// 소문자로 된 한개의 문자열이 입력도면 중복된 문자를 제거하고 출력하는 프로그램을 작성하세요.
// 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.

function solution(s) {
  return [...new Set(s)].join("");
}
console.log(solution("ksekkset"));

// 강의
function solution1(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) answer += s[i];
  }

  return answer;
}

console.log(solution1("ksekkset"));
