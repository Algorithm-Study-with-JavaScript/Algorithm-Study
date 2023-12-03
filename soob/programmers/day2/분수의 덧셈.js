// 내 풀이
const getGCD = (num1, num2) => {
  let gcd = 1;

  for (let i = 2; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }

  return gcd;
};

function solution(denom1, numer1, denom2, numer2) {
  let numer = denom1 * numer2 + denom2 * numer1;
  let denom = numer1 * numer2;
  let gcd = getGCD(numer, denom);

  return [numer / gcd, denom / gcd];
}

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
