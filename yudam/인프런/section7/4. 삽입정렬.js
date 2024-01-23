function solution(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[key] < arr[j]) {
        [arr[key], arr[j]] = [arr[j], arr[key]];
        key = j;
      }
      console.log(arr);
    }
  }
  return arr;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
