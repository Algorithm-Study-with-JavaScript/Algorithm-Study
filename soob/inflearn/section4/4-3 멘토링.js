// 현수네 반 선생님은 반 학생들의 수학점수를 향상시키기 위해 멘토링 시스템을 만들려고 합니다.
// 멘토링은 멘토와 멘티가 한 짝이 되어 멘토가 멘티의 수학공부를 도와주는 것입니다.
// 선생님은 M번의 수학테스트 등수를 가지고 멘토와 멘티를 정합니다.
// 만약 A학생이 멘토이고, B학생이 멘티가 되는 짝이 되었다면, A학생의 M번의 수학테스트에서 모두 B학생보다 등수가 앞서야 합니다.
// M번의 수학성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇 가지 인지 출력하는 프로그램을 작성하세요.

// 강의
function solution(test) {
  let answer = 0;
  m = test.length; //행의 개수
  n = test[0].length; // 학생수

  for (let i = 1; i <= n; i++) {
    //1번 학생부터 n번 학생까지
    for (let j = 1; j <= n; j++) {
      //1번 학생부터 n번 학생까지
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = (pj = 0);
        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) pi = s; //등수 저장
          if (test[k][s] === j) pj = s; // 등수 저장
        }
        if (pi < pj) cnt++; // 등수 확인해서 cnt 추가
      }
      if (cnt === m) answer++; // 모두 통과해야만 answer 추가
    }
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
