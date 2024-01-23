function solution(meeting) {
  let answerArr = [];
  meeting.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < meeting.length; i++) {
    let end = meeting[i][1];
    let answer = 1;
    for (let j = i + 1; j < meeting.length; j++) {
      if (meeting[j][0] >= end) {
        end = meeting[j][1];
        answer += 1;
      }
    }
    answerArr.push(answer);
  }
  return answerArr.sort((a, b) => b - a)[0];
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));

// 강의 풀이
function solution1(meeting) {
  let answer = 0;

  // 끝나는 시간 기준으로 정렬
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  let et = 0;
  for (let x of meeting) {
    if (x[0] >= et) {
      answer++;
      et = x[1];
    }
  }

  return answer;
}

let arr1 = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution1(arr1));
