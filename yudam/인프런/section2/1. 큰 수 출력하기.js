function solution(arr) {
  const newArray = [];
  arr.forEach((e, i, a) => {
    if (!a[i - 1]) {
      newArray.push(a[i]);
    }
    if (a[i] > a[i - 1]) {
      newArray.push(a[i]);
    }
  });
  return newArray;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
