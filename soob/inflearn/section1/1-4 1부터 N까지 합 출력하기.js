// 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램으 작성하세요.

// 입력설명
// 첫 번째 줄에 20이하의 자연수 N이 입력된다.

// 출력설명
// 첫 번째 줄에 1부터 N까지의 합을 출력한다.

function solution(n) {
  if (n % 2 === 0) {
    return (n + 1) * (n / 2);
  }
  return (n + 1) * Math.floor(n / 2) + Math.ceil(n / 2);
}

console.log(solution(10));

// 강의
function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer = answer + 1;
  }

  return answer;
}

console.log(solution(10));
