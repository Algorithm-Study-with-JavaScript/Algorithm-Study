const solution = (sides) => {
  let count = 0;
  const maxSide = Math.max(...sides);
  const minSide = Math.min(...sides);

  for (let i = maxSide - minSide + 1; i <= maxSide; i++) {
    count++;
  }
  for (let i = maxSide + 1; i < maxSide + minSide; i++) {
    count++;
  }
  return count;
};

//다른 사람 풀이
function solution(sides) {
  return Math.min(...sides) * 2 - 1;
}
