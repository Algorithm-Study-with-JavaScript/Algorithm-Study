function isPrime(num) {
  if (num === 1) return false;
  // Math.sqrt 함수를 사용하여 제곱근까지만 반복하도록 한다.
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n) {
  let arr = [];

  for (let j = 2; j <= n; j++) {
    if (n % j === 0) {
      arr.push(j);
    }
  }

  return arr.filter((e) => isPrime(e));

}
