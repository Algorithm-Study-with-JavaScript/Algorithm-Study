// 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하세요.
// 문자열의 길이는 100을 넘지 않습니다.

// 입력설명
// 첫 줄에 문자열이 주어지고, 두 번째 줄에 문자가 주어진다.

// 출력설명
// 첫 줄에 해당 문자의 개수를 출력한다.

function solution(s, t) {
  return [...s].reduce((acc, el) => {
    if (el === t) {
      return (acc += 1);
    }
    return acc;
  }, 0);
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));

// 강의
function solution1(s, t) {
  let answer = 0;

  for (let x of s) {
    if (x === t) answer++;
  }

  return answer;
}

console.log(solution1(str, "R"));

function solution2(s, t) {
  let answer = s.split(t).length;
  return answer - 1;
}

console.log(solution2(str, "R"));
