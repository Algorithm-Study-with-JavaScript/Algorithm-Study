// new Date()로 Date 객체를 만들면 이는 현재 날짜와 시간을 가지는 Date 객체를 반환한다.
// getFullYear는 연도를 정수로 반환한다.

// 그런데 올해는 2023이라 이는 틀린 코드 하지만 알고 있으면 좋을듯
function solution(age) {
  return new Date().getFullYear() - age + 1;
}


function solution(age) {
  var answer = 2022 - age + 1;
  return answer;
}