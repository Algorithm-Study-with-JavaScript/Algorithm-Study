const solution = (balls, share) => {
  const factorial = (n) => {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  };
  // 조합 공식 : nCr = n! / (r!( n-r)!)
  return Math.round(factorial(balls) / (factorial(share) * factorial(balls - share)));
};

// 다른 사람 풀이
const 팩토리얼 = (num) => (num === 0 ? 1 : num * 팩토리얼(num - 1));

function solution(balls, share) {
  return Math.round(팩토리얼(balls) / 팩토리얼(balls - share) / 팩토리얼(share));
}
