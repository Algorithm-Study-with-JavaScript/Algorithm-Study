function gcd(a, b) {
  let big = Math.max(a, b);
  let small = Math.min(a, b);

  for (let i = small; i >= 1; i--) {
    if (big % i === 0 && small % i == 0) {
      return i;
    }
  }
}

function isPrime(num) {
  if (num === 1) {
    return false;
  }

  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function solution(a, b) {
  let mother = b / gcd(a, b);
  const newArray = [];
  for (let i = 1; i <= mother; i++) {
    if (mother % i == 0) {
      newArray.push(i);
    }
  }

  let length = newArray
    .filter((e) => isPrime(e))
    .filter((e) => e !== 5 && e !== 2).length;

  return length ? 2 : 1;
}

function solution(a, b) {
  let n = 1;
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) n = i;
  }

  b /= n;
  while (b % 2 === 0) b /= 2;
  while (b % 5 === 0) b /= 5;

  return b === 1 ? 1 : 2;
}
