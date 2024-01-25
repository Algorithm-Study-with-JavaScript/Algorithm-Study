const mySolution = (arr) => {
  const arrLength = arr.length - 1;

  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength; j++) {
      if (arr[j + 1] < arr[j]) {
        let k = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = k;
      }
    }
  }
  return arr;
};

console.log(mySolution([13, 5, 11, 7, 23, 15]));

// 강의 풀이
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
