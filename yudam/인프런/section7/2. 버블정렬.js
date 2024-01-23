function solution(arr) {
  // 한 번 돌 때마다 가장 큰 값 결정되고, 그게 맨 뒤로 들어감
  // 두 번째에 들어갈 값이 결정된 순간 맨 앞자리에 들어갈 값도 정해지기에 length-1 만큼만 순회해도 됨
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // 한 번 씩 돌때마다 이미 정해진 만큼은 비교하지 않아도 됨
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
