function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[temp] > arr[j]) {
        temp = j;
      }
      [arr[temp], arr[j]] = [arr[j], arr[temp]];
    }
  }
  return arr;
}
function solution2(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j;
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
