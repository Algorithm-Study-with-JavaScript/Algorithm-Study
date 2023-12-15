function solution(s) {
  const mid = s.length / 2;
  if (s.length % 2 === 0) {
    return s.slice(mid - 1, mid + 1);
  } else {
    
    return s[Math.floor(mid)];
  }
}
console.log(solution("teacher"));
