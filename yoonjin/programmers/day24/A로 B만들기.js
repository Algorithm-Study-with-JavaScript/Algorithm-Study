// 나의 풀이: localecompare으로 문자열 비교해서 sort한 후 join해서 문자열 만듦. 그래서 같은 값인지 비교
const solution = (before, after) =>
  [...before].sort((a,b)=> a.localeCompare(b)).join("") === [...after].sort((a,b)=> a.localeCompare(b)).join("") ? 1 : 0

// 다른 사람 풀이: split 후 sort
function solution(before, after) {
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
}
