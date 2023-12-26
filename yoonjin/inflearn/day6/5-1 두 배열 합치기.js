function solution(arr1, arr2) {
  let res = [];
  for (let i = 0; i < arr1.length; i++) {
    res.push(arr1[i]);
    res.push(arr2[i]);
  }
  if (arr1.length < arr2.length) {
    arr2.slice(arr1.length).map((x) => res.push(x));
  }
  console.log(res);
}
let arr1 = [1, 3, 5];
let arr2 = [2, 3, 6, 7, 9];
solution(arr1, arr2);
