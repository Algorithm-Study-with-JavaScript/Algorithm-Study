function solution(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    let tmp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = tmp;
  }
  return arr;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
