function solution(arr) {
  let max = 0;
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      // 현재 학생이 max 키보다 크다면
      max = arr[i]; // max 갱신
      answer.push(arr[i]); // 보이는 학생에 추가
    }
  }

  console.log(answer.length);
}
solution([130, 135, 148, 140, 145, 150, 150, 153]);

// function solution(arr) {
//   let answer = 1,
//     max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       answer++;
//       max = arr[i];
//     }
//   }
//   return answer;
// }

// let arr = [130, 135, 148, 140, 145, 150, 150, 153];
// console.log(solution(arr));
