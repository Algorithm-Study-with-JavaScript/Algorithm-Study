const solution = (n) => {
  const factors = [];
  let divisor = 2;

  while (n > 1) {
    if (n % divisor === 0) {
      factors.push(divisor);
      n /= divisor;
    } else {
      divisor++;
    }
  }

  const uniqueFactors = [...new Set(factors)]; // Set은 중복 요소를 허용하지 않음

  return uniqueFactors;
};

// 다른 사람 풀이
function solution(n) {
  let answer = [];

  let i = 2;
  while (i <= n) {
    if (n % i === 0) {
      answer.push(i);
      n = n / i;
    } else {
      i++;
    }
  }

  return [...new Set(answer.sort((a, b) => (a > b ? 1 : -1)))];
}
