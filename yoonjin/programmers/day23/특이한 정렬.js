// 나의 풀이
const solution = (numlist, n) => numlist.sort(function(a,b){
    return Math.abs(a-n) == Math.abs(b-n) ? b-a : Math.abs(a-n) - Math.abs(b-n) });

// 다른 사람 풀이: ||으로 값이 같은 경우 다중 정렬 이용
function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}
