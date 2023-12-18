function isPrime(n) {
  let sum = 0;
  if (n === 1) {
    return false;
  }
  for (let i = 1; i <= n; i++) {
    if (sum > 2) {
      return false;
    }
    if (n % i === 0) {
      sum += 1;
    }
  }
  return true;
}

function solution(arr) {
  let prime = [];
  for (let num of arr) {
    let reversed = parseInt(num.toString().split('').reverse().join(''));
    if (isPrime(reversed)) {
      prime.push(reversed);
    }
  }
  console.log(prime);
}
let arr1 = [32, 55, 62, 20, 250, 370, 200, 30, 100];
solution(arr1);
