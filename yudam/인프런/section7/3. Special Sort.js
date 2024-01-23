function solution(arr) {
  const newArray = [];
  const newArray2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      newArray.push(arr[i]);
    } else {
      newArray2.push(arr[i]);
    }
  }
  return [...newArray, ...newArray2];
}

function solution2(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}
let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution2(arr));
