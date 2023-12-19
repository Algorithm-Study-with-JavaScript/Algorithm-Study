function solution(arr1, arr2) {
  let res = arr1.filter((x) => arr2.includes(x)).sort((a, b) => a - b);
  console.log(res);
}
let arr1 = [1, 3, 9, 5, 2];
let arr2 = [3, 2, 5, 7, 8];
solution(arr1, arr2);
