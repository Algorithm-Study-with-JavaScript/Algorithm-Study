function solution(m, arr) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    let flag = 0;
    let sum = arr[i];
    let a = [arr[i]];
    for (let j = i + 1; j < arr.length; j++) {
      sum = sum + arr[j];
      a.push(arr[j]);
      if (sum === m || sum > m) {
        flag = 1;
        break;
      }
    }
    if (flag === 1 && sum === m) {
      answer += 1;
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
