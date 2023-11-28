function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}
function solution(str1, str2) {
  return str1.split(str2).length > 1 ? 1 : 2;
}
function solution(str1, str2) {
  return str1.indexOf(str2) === -1 ? 2 : 1;
}
