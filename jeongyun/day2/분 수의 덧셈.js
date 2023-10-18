const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

const solution = (numer1, denom1, numer2, denom2) => {
  const lcm = (denom1 * denom2) / gcd(denom1, denom2);

  const newNumer1 = numer1 * (lcm / denom1);
  const newNumer2 = numer2 * (lcm / denom2);

  const resultNumer = newNumer1 + newNumer2;
  const resultDenom = lcm;
  const commonDivisor = gcd(resultNumer, resultDenom);

  return [resultNumer / commonDivisor, resultDenom / commonDivisor];
};

// 다른 사람 풀이
function fnGCD(a, b) {
  return a % b ? fnGCD(b, a % b) : b;
}

function solution(denum1, num1, denum2, num2) {
  let denum = denum1 * num2 + denum2 * num1;
  let num = num1 * num2;
  let gcd = fnGCD(denum, num); //최대공약수

  return [denum / gcd, num / gcd];
}
