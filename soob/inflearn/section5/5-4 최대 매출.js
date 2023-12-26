function solution(k, arr) {
  let answer = [];
  for (let i = 0; i < arr.length - k + 1; i++) {
    let sum = 0;
    for (let j = 0; j < k; j++) {
      sum += arr[i + j];
    }
    answer.push(sum);
  }
  return answer.sort((a, b) => b - a)[0];
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
