// 내 풀이
function solution(array, n) {
  array.push(n);
  array.sort((a, b) => a - b);
  const idx = array.indexOf(n);
  if (idx === array.length - 1) return array[idx - 1];
  if (idx === 0) return array[1];
  return n - array[idx - 1] > array[idx + 1] - n
    ? array[idx + 1]
    : array[idx - 1];
}

// 다른 사람 풀이
function solution(array, n) {
  array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);

  return array[0];
}
