function solution(k, arr) {
  let res = [];
  arr = arr.sort((a, b) => b - a);
  const n = arr.length;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let l = j + 1; l < n; l++) {
        res.push(arr[i] + arr[j] + arr[l]);
      }
    }
  }

  if (res[k]) {
    console.log(res[k - 1]);
  } else {
    console.log(-1);
  }
}
let k = 3;
let arr1 = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
solution(k, arr1);
