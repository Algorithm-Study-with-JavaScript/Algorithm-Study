const solution = (my_string) => {
  const numbers = my_string.match(/\d+/g); // + == 앞의 패턴(숫자)이 하나 이상의 연속된 문자

  if (!numbers) return 0;

  return numbers.reduce((acc, num) => acc + +num, 0);
};

// 다른 사람 풀이
function solution(my_string) {
  return my_string
    .toLowerCase()
    .replace(/[a-z]/g, " ")
    .split(" ")
    .map((v) => v * 1)
    .reduce((a, b) => a + b);
}
