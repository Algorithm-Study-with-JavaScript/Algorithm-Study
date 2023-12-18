function solution(arr1, arr2) {
  let answer = [];
  arr1.map((e) => {
    arr2.map((k) => {
      if (e === k) return answer.push(k);
    });
  });
  return answer.sort((a, b) => a - b);
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
