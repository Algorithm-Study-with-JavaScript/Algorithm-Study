const solution = (n, numlist) => numlist.filter((value) => value % n === 0);

// 다른 사람 풀이
function solution(n, numlist) {
  var answer = [];

  for (let i = 0; i <= numlist.length; i++) {
    if (numlist[i] % n === 0) {
      answer.push(numlist[i]);
    }
  }
  return answer;
}
