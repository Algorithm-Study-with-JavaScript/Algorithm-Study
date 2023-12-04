// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

// 입력 설명
// 첫 번재 줄에 7개의 수가 주어진다.

// 출력 설명
// 첫 번재 줄에 가장 작은 값을 출력한다.

function solution(arr) {
  return arr.sort((a, b) => a - b)[0];
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));

// 강의
function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
}

console.log(solution(arr));
