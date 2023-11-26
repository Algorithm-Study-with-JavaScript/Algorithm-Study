function solution(num, total) {
  const newArray = Array.from({ length: num }, (_, i) => i);
  const sum = newArray.reduce((a, e) => a + e, 0);

  const x = (total - sum) / newArray.length;

  return Array.from({ length: num }, (_, i) => x + i);
}
