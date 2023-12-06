function solution(arr) {
  console.log(arr.filter((x, i) => (i == 0) | (x > arr[i - 1]))); //filter로 자신의 앞요소보다 큰 수만
}

solution([7, 3, 9, 5, 6, 12]);