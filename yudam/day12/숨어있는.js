function solution(my_string) {
  let regex = /\d/g;
  let arr = my_string.match(regex).map(Number);

  return arr.reduce((a, e) => a + e, 0);
}
function solution(my_string) {
  const answer = my_string
    .replace(/[^0-9]/g, "")
    .split("")
    .reduce((acc, curr) => acc + Number(curr), 0);
  return answer;
}
