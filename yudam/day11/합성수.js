function solution(n) {
  let arr = [];


  for (let i = 1; i <= n; i++) {   // n = 10이라면, 10이하의 숫자에 대해
    for (let j = 2; j < i; j++) { // 그 숫자보다 작은 숫자로 나누어가면서, 1과 자기 자신을 제외하고 나누어 떨어지는 수가 존재하면 push
      if (i % j === 0) {
        arr.push(i);
      }
    }
  }
  let newArr = new Set(arr);

  return newArr.size;
}






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


  for (let i = 2; i <= n; i++) {   // n = 10이라면, 10이하의 숫자에 대해
    isPrime(i) || arr.push(i)
  }
  return arr;
}