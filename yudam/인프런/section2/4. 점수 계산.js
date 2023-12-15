function solution(arr) {
  let conti = 1;
  let score = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      score += conti;
      conti++;
    } else {
      conti = 1;
    }
  }
  return score;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
