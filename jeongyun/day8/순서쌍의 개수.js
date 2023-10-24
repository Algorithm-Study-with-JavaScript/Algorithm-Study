const solution = (n) => {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      // n을 i로 나눈 몫이 다른 숫자인 경우, 순서쌍을 추가
      if (n / i !== i) {
        count += 2;
      } else {
        // n을 i로 나눈 몫이 i와 같은 경우, 한 숫자로만 이루어진 순서쌍이므로 1을 추가
        count += 1;
      }
    }
  }
  return count;
};

// 다른 사람 풀이 - 약수의 갯수
function solution(n) {
  const answer = [];
  for (let i = 0; i < n + 1; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }
  return answer.length;
}
