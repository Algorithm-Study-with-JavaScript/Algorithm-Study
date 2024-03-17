function solution(arr) {
  let count = 0;
  let a, b;
  arr.forEach((e, i) => {
    if (arr[i] >= arr[i + 1]) {
      if (count === 0) {
        a = i + 1;
        count++;
      } else {
        b = i + 1 + 1;
      }
    }
  });
  return [a, b];
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
arr = [120, 130, 150, 150, 130, 150];
console.log(solution(arr));
