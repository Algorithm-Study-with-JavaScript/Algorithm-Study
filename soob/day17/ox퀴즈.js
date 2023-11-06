// 내 풀이
function solution(quiz) {
  var answer = [];
  const arr = [];
  quiz.map((e) => {
    arr.push(e.split(" "));
  });

  arr.map((e) => {
    e.reduce((acc, el, index) => {
      if (index % 2 !== 0 && index !== 0) {
        if (el === "=") {
          acc === Number(e[index + 1]) ? answer.push("O") : answer.push("X");
          return acc;
        }
        const a = Number(e[index - 1]);
        const b = Number(e[index + 1]);
        return (acc =
          index === 1
            ? acc + (el === "+" ? a + b : a - b)
            : el === "+"
            ? acc + b
            : acc - b);
      }
      return acc;
    }, 0);
  });
  return answer;
}
// quiz 배열을 각 문제 내부에서 요소로 나누기 위해 map 을 사용하여 2차원 배열로 바꿈
// 바꾼 배열 arr를 map을 이용해서 각 문제 별로 reduce 사용
// 수식이 있는 인덱스는 0이 아니고 홀수인 인덱스임
// 조건문을 통해서 수식이 부분일 경우 =인지 판별 후 아니면 인덱스 이전값, 이후값을 가지고 연산함
// 연산한 값은 acc값에 추가하며 반복
// 수식 =인 경우에는 연산을 진행한 acc값이 마지막 값과 같은지 검사 후 맞다면 answer에 O를 push하고 아니면 X를 push 함
// 최종적으로 answer 리턴

// 다른 사람 풀이
function solution(quiz) {
  var answer = [];
  return quiz.map((t) => {
    const [calc, result] = t.split(" = ");
    const sign = calc.includes("+") ? 1 : -1;
    const [a, b] = calc.split(sign === 1 ? " + " : " - ");

    return +a + +b * sign === +result ? "O" : "X";
  });
}
// 각 문제를 =을 기준으로 자른 후 구조 분해 할당하여 calc, result로 할당
// calc에 +가 포함되어 있는지 검사하여 포함된 경우 1을 아닌 경우 -1을 sign에 할당
// calc를 split을 통해서 다시 잘라 배열로 만들 때 만약 sign이 1이면 +를 기준으로 아니면 -기준으로 자른 후
// 구조 분해 할당하여 a,b에 할당함,
// return 문에서 sign을 b에 곱한 후 a와 더함
// 만약 3-4일 경우 a=3 b=4 sign=-1 => 3+(4*-1) 가 됨
// 이 결과가 result와 동일한지 검사 후 O,X를 리턴함
