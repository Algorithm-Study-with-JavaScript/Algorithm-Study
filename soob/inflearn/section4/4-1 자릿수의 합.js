// N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력하는 프로그램을 작성하세요.
// 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.

function solution(n, arr) {
  let max = Number.MIN_SAFE_INTEGER;
  return arr.reduce((acc, el) => {
    const num = [...el.toString()].reduce((a, e) => (a += Number(e)), 0);
    if (num >= max) {
      max = num;
      return max === num ? (el > acc ? el : acc) : el;
    }
    return acc;
  }, 0);
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
