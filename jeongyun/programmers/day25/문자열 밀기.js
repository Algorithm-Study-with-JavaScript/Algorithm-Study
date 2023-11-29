const solution = (A, B) => (B + B).indexOf(A); // "hellohello"

// 다른 사람 풀이
function solution(A, B) {
  if (A === B) return 0;
  for (let i = 0; i < A.length; i++) {
    A = A.slice(-1) + A.slice(0, -1); //  A의 마지막 문자를 맨 앞으로 옮김
    if (A === B) return i + 1;
  }
  return -1;
}
