function solution(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let [a, b] = arr[i];
    let [c, d] = arr[i + 1];

    if (a > c) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }

  for (let i = 0; i < arr.length - 1; i++) {
    let [a, b] = arr[i];
    let [c, d] = arr[i + 1];

    if (a === c && b > d) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }

  return arr;
}

function solution2(arr) {
  arr.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

  return arr;
}
let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
console.log(solution2(arr));
