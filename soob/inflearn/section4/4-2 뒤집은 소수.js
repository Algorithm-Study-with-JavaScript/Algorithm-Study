// N개의 자연수가 입력되면 각 자연수를 뒤집은 수가 소수이면 그 소수를 출력하는 프로그램을 작성하세요.

function isPrime(num) {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i < num - 1; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(arr) {
  return arr.reduce((acc, el) => {
    let answer = acc;
    const reverseNum = Number([...el.toString()].reverse().join(""));

    if (isPrime(reverseNum)) {
      answer.push(reverseNum);
      return answer;
    }
    return acc;
  }, []);
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
