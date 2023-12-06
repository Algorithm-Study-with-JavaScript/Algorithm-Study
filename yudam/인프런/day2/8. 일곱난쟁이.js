function solution(arr) {
  const total = 100;

  const sum = arr.reduce((a, e) => {
    return a + e;
  }, 0);

  let flag = 0;
  const two = sum - 100;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
  
      if (arr[i] + arr[j] === two) {
        arr.splice(j, 1);
        arr.splice(i, 1);
        flag = 1;
        break;
      }
    }
    if (flag === 1) {
      break;
    }
  }

  return arr;
}
let arr = [22, 7, 21, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
