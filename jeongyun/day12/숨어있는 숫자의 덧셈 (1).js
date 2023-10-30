const solution = (my_string) => my_string.match(/[0-9]/g).reduce((acc, num) => acc + Number(num), 0);

// 다른 사람 풀이
function solution(my_string) {
  return my_string
    .split("")
    .filter((v) => !isNaN(v)) // isNaN 문자열이든 숫자든 숫자가 입력되면 false
    .reduce((a, b) => parseInt(a) + parseInt(b));
}
