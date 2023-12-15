function countMentorPairs(N, M, testResults) {
  let count = 0;

  for (let i = 1; i <= N; i++) {
    // 모든 학생에 대해 멘토 후보로 확인
    for (let j = 1; j <= N; j++) {
      // 모든 학생에 대해 멘티 후보로 확인
      if (i === j) continue; // 같은 학생이 멘토와 멘티가 될 수 없음

      let isMentor = true;
      for (let k = 0; k < M; k++) {
        // 모든 시험에 대해 등수 확인
        if (testResults[k].indexOf(i) > testResults[k].indexOf(j)) {
          isMentor = false;
          break;
        }
      }

      if (isMentor) {
        count++;
      }
    }
  }

  return count;
}

// 입력 예제 처리
const input = [
  [4, 3],
  [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ],
];

const N = input[0][0];
const M = input[0][1];
const testResults = input.slice(1)[0].map((result) => result.map(Number));

const result = countMentorPairs(N, M, testResults);
console.log(result);
