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

function solution(denum1, numer1, denum2, numer2) {
  let denum = denum1 * numer2 + denum2 * numer1;
  let numer = numer1 * numer2;
  let gcd = getGCD(denum, numer);

  return [denum / gcd, num / gcd];
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
