function solution(a, b) {
  return a.map((e, i) => {
    if (a[i] === b[i]) {
      return "D";
    }

    if (b[i] - a[i] === 1) {
      return "B";
    }

    if (b[i] - a[i] === 2) {
      return "A";
    }

    if (a[i] - b[i] === 1) {
      return "A";
    }

    if (a[i] - b[i] === 2) {
      return "B";
    }
  });
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
