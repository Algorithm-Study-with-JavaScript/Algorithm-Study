function solution(arr) {
  let over = arr.reduce((a, c) => a + c, 0) - 100; //넘치는 키
  let error = [];
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === over) {
        error.push(arr[i]);
        error.push(arr[j]);
        break;
      }
    }
  }
  answer = arr.filter((x) => !error.includes(x));
  console.log(answer);
}

solution([20, 7, 23, 19, 10, 15, 25, 8, 13]);
