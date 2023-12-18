function solution(arr1, arr2) {
  const newArray = [...arr1, ...arr2];
  newArray.sort((a, b) => a - b);

  return newArray;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
