const greatestCommonDivisor = (a, b) => {
  if (b === 0) return a;
  return greatestCommonDivisor(b, a % b);
};

const solution = (a, b) => {
  const gcd = greatestCommonDivisor(a, b);

  a /= gcd;
  b /= gcd;

  while (b % 2 === 0) {
    b /= 2;
  }
  while (b % 5 === 0) {
    b /= 5;
  }

  return b === 1 ? 1 : 2;
};

// 다른 사람 풀이
function solution(a, b) {
  let tmpB = b;
  while (tmpB % 2 === 0) tmpB /= 2;
  while (tmpB % 5 === 0) tmpB /= 5;
  if (a % tmpB === 0) tmpB = 1;
  return tmpB === 1 ? 1 : 2;
}
