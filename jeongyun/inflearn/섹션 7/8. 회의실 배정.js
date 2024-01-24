const mySolution = (meeting) => {
  meeting.sort((a, b) => a[1] - b[1]);

  let count = 1;
  let endTime = meeting[0][1];

  for (let i = 1; i < meeting.length; i++) {
    if (meeting[i][0] >= endTime) {
      count++;
      endTime = meeting[i][1];
    }
  }

  return count;
};

console.log(
  mySolution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);

// 강의 풀이
function solution(meeting) {
  let answer = 0;
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

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));
