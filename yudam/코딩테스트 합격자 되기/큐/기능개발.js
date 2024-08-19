// function solution(progresses, speeds) {
//   const percent = 100;
//   const remain = [];

//   for (let i = 0; i < progresses.length; i++) {
//     if (progresses[i] < 100) {
//       remain[i] = Math.ceil((percent - progresses[i]) / speeds[i]);
//     }
//   }

//   let each = remain[0];
//   const answer = [];
//   let count = 1;

//   for (let i = 1; i < remain.length; i++) {
//     if (each < remain[i]) {
//       answer.push(count);
//       count = 1;
//       each = remain[i];
//     } else {
//       count++;
//     }

//     if (i === remain.length - 1) {
//       answer.push(count);
//     }
//   }
//   console.log(answer);
//   return answer;
// }

// console.log(solution([93, 30, 55], [1, 30, 5]));

// // console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
function solution(progresses, speeds) {
  const remain = [];

  for (let i = 0; i < progresses.length; i++) {
    remain.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  console.log(remain);
  // remain 배열을 순회하면서 자기보다 뒤에 있지만, 자기보다 작은 값이 존재하면 이번 배포에 포함시킴

  let big = remain[0];
  let count = 1;
  const answer = [];

  for (let i = 1; i < remain.length; i++) {
    if (big >= remain[i]) {
      count++;
    } else {
      big = remain[i];
      answer.push(count);
      count = 1;
    }

    if (i === remain.length - 1) {
      answer.push(count);
    }
  }

  return answer;
}
