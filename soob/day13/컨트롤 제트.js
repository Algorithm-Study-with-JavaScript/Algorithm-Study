// 내 풀이
function solution(s) {
  var answer = 0;
  const arr = s.split(" ");
  answer = arr.reduce((acc, el, index) => {
    const num = Number(el);
    if (num || num === 0) {
      return acc + num;
    }
    return acc - arr[index - 1];
  }, answer);
  return answer;
}
// 공백 기준으로 문자열 잘라서 배열로 저장
// reduce 메소드 사용, 초기값은 answer = 0 el을 Number 타입으로 num에 할당
// Z인 경우 Number가 NaN을 리턴해서 조건문에서 걸림, 0의 경우 Boolean이 false를 리턴하기 때문에 조건에 추가해줌
// 숫자인 경우에는 이전값에 현재값을 더해서 리턴함
// 숫자가 아닌 경우에는 현재 인덱스-1에 해당하는 값을 누적값에서 뺀 후 리턴함

// 다른 사람 풀이
function solution(s) {
  const stack = [];

  s.split(" ").forEach((target) => {
    if (target === "Z") stack.pop();
    else stack.push(+target);
  });

  return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
}
