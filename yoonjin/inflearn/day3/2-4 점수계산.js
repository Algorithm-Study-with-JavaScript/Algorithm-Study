function solution(arr) {
  let answer = arr[0]; // 첫 번째 인덱스는 무조건 더함
  let last = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === 1) {
      // 현재 요소의 값이 1인 경우
      last += arr[i - 1] === 1 ? 1 : 0; // 이전 요소가 1인 경우 누적합 + 1
      answer += last;
    } else {
      //현재 요소가 0인 경우
      last = 1; // 누적합 초기화
    }
  }

  console.log(answer);
}

// function solution(arr) {
//   let answer = 0,
//     cnt = 0;
//   for (let x of arr) {
//     if (x === 1) {
//       cnt++;
//       answer += cnt;
//     } else cnt = 0;
//   }
//   return answer;
// }

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
solution(arr);
let arr2 = [1, 0, 1, 1];
solution(arr2);
