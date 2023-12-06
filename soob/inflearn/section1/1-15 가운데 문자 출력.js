// 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요.
// 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.

function solution(s) {
  if (s.length % 2 === 1) {
    return s[Math.floor(s.length / 2)];
  }
  return `${s[s.length / 2 - 1]}${s[s.length / 2]}`;
}
console.log(solution("study"));
console.log(solution("good"));

// 강의
function solution1(s) {
  let answer;
  let mid = Math.floor(s.length / 2);

  if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
  //s.substr(mid, 1)
  else answer = s.substring(mid - 1, mid + 1);
  //s.substr(mid-1, 2)

  return answer;
}
console.log(solution1("study"));
console.log(solution1("good"));
