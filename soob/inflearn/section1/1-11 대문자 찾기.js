// 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램을 작성하세요.

function solution(s) {
  return [...s].filter((e) => e.toUpperCase() === e).length;
}

let str = "KoreaTimeGood";
console.log(solution(str));
