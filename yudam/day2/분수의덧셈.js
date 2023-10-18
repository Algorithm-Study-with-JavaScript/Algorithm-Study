function solution(numer1, denom1, numer2, denom2) {
  var answer = [];
  let mother = denom1 * denom2;
  let son = numer1 * denom2 + numer2 * denom1;

  let gcd_final = gcd(mother, son);

  return [son / gcd_final, mother / gcd_final];
}


function gcd(mother, son) {
  for (let i = mother; i >= 1; i--) {
    if (mother % i == 0 && son % i == 0) {
      return i;
    }
  }
}

// ----------------------------------------------------------------------------

// 유클리드 호제법 사용
function fnGCD(a, b) {
  return (a % b) ? fnGCD(b, a % b) : b;
}

function solution(denum1, num1, denum2, num2) {
  let denum = denum1 * num2 + denum2 * num1;
  let num = num1 * num2;
  let gcd = fnGCD(denum, num); //최대공약수

  return [denum / gcd, num / gcd];
}