function solution(arr) {
  let rank = [...arr].sort((a, b) => b - a); // 등수 구하기
  let answer = [...arr].map((x) => rank.indexOf(x) + 1); // 입력된 순서대로 등수 매치
  console.log(answer);
}

solution([87, 89, 92, 100, 76]);
