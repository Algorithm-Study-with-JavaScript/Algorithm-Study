function solution(m, arr) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum <= m) {
        count++;
        console.log(arr.slice(i, j + 1));
      }
    }
    sum = 0;
  }
  return count;
}

function solution2(m, arr) {
  let answer = 0,
    sum = 0,
    lt = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }
  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
