function solution(m, arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];

      if (sum === m) {
        console.log(arr.slice(i, j + 1));
        break;
      }
    }
    sum = 0;
  }
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
