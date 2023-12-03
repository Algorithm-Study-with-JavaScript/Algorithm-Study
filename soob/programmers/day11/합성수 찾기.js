// 내 풀이
function count(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count = count + 1;
    }
  }
  return count;
}

function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    if (count(i) >= 3) answer = answer + 1;
  }
  return answer;
}

// 다른 사람 풀이
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
