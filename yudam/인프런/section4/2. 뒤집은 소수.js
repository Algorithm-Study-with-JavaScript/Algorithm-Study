function isPrime(number) {
  if (number === 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
function solution(arr) {
  const newArray = arr.map((e) => +e.toString().split("").reverse().join(""));

  return newArray.filter((e) => isPrime(e));
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
