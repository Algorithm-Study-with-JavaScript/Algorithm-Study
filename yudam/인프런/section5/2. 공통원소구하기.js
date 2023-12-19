function solution(arr1, arr2) {
  const newSet1 = new Set([...arr1]);
  const newSet2 = new Set([...arr2]);

  return [...newSet1].filter((item) => newSet2.has(item)).sort((a, b) => a - b);
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
