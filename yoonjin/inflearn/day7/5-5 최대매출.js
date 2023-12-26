function maxRevenue(N, K, sales) {
  let maxSum = 0;
  let currentSum = 0;

  // 처음 K 길이의 윈도우의 합 계산
  for (let i = 0; i < K; i++) {
    maxSum += sales[i];
  }

  // 처음 윈도우의 합을 현재 최대 합으로 설정
  currentSum = maxSum;

  // 슬라이딩 윈도우를 움직이며 최대 매출액 계산
  for (let i = K; i < N; i++) {
    // 현재 윈도우의 합 갱신
    currentSum = currentSum + sales[i] - sales[i - K];
    // 최대 합 갱신
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// 예제 입력값
const N = 10;
const K = 3;
const sales = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];

// 결과 출력
console.log(maxRevenue(N, K, sales)); // 출력: 56
