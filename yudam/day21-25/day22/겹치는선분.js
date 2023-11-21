function solution(lines) {
  let ans = 0;
  for (let i = -100; i < 100; i++) {
    ans += lines.filter((l) => l[0] <= i && i < l[1]).length > 1 ? 1 : 0;
  }
  return ans;
}
