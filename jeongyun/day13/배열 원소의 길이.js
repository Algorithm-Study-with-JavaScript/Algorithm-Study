const solution = (strlist) => strlist.reduce((acc, value) => [...acc, value.length], []);

// 다른 사람 풀이
function solution(strlist) {
  return strlist.map((el) => el.length);
}
