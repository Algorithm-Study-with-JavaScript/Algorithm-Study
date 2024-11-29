// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  const set = new Set();
  for (let i = 0; i < S.length - 2; i++) {
    set.add(S.slice(i, i + 3));
  }

  return set.size();
}

console.log(solution("bbbaaab"));
