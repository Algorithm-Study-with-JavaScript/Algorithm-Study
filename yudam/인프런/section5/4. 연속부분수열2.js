function solution(m, arr) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum <= m) {
        count++;
        //console.log(arr.slice(i, j + 1));
      }
    }
    sum = 0;
  }
  return count;
}
let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
