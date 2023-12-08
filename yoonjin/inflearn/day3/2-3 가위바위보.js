const WIN = {
  1: 3,
  2: 1,
  3: 2,
};

function solution(arr1, arr2) {
  const t = arr1.length;
  for (let i = 0; i < t; i++) {
    let A = arr1[i];
    let B = arr2[i];
    let winner = WIN[A] === B ? 'A' : WIN[B] === A ? 'B' : 'D';

    console.log(winner);
  }
}
solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]);

// function solution(a, b) {
//   let answer = '';
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] === b[i]) answer += 'D ';
//     else if (a[i] === 1 && b[i] === 3) answer += 'A ';
//     else if (a[i] === 2 && b[i] === 1) answer += 'A ';
//     else if (a[i] === 3 && b[i] === 2) answer += 'A ';
//     else answer += 'B ';
//   }

//   return answer;
// }

// console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
