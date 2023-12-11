// 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우
// 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시오
// 단 반복횟수가 1인 경우 생략합니다.

function solution(s) {
  let answer = [];
  const arr = [...s];
  arr.reduce((acc, el, index) => {
    if (index !== 0 && el === arr[index - 1]) {
      return (acc = acc + 1);
    }

    if (acc !== 1) answer.push(acc);
    answer.push(el);
    return (acc = 1);
  }, 1);

  return answer.join("");
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
