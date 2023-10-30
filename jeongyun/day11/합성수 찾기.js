const solution = (n) => {
  let count = 0;
  for (let num = 4; num <= n; num++) {
    for (let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
      if (num % divisor === 0) {
        count++;
        break;
      }
    }
  }
  return count;
};

// 다른 사람 풀이
// 에라토스테네스의 체 알고리즘
function solution(n) {
  let dp = new Array(n + 1).fill(1);
  for (let i = 2; i <= n; i++) {
    if (dp[i]) {
      for (let j = 2; i * j <= n; j++) {
        dp[i * j] = 0;
      }
    }
  }

  return dp.filter((el) => el === 0).length;
}
