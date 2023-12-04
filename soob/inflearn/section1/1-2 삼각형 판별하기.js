// 길이가 서로 다른 A,B,C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있으면 'Yes'를 출력하고, 만들 수 없으면 'No'를 출력한다.

function solution(a, b, c) {
  let answer = "YES";

  const sortArr = [a, b, c].sort();
  if (sortArr[0] + sortArr[1] > sortArr[2]) return answer;
  return (answer = "NO");
}

console.log(solution(13, 33, 17));

// 강의
function solution(a, b, c) {
  let answer = "YES",
    max;
  let sum = a + b + c;

  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;

  if (sum - max <= max) answer = "NO";
  return answer;
}

console.log(solution(13, 33, 17));
