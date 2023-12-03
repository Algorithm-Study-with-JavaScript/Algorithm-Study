const solution = (slice, n) => Math.ceil(n / slice);

// 다른 사람 풀이
function solution(slice, n) {
  let i = 1;
  while (slice * i < n) {
    i++;
  }
  return i;
}
