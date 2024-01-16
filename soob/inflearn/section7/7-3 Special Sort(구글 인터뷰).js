function solution(arr) {
  let arr1 = [];
  let arr2 = [];
  arr.map((e) => {
    if (e < 0) {
      arr1.push(e);
      return;
    }
    arr2.push(e);
  });
  return [...arr1, ...arr2];
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
