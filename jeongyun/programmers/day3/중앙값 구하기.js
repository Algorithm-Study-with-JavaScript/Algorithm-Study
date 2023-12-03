const solution = (array) => array.sort((a, b) => a - b)[(array.length - 1) / 2];

// 다른 사람 풀이
function solution(array) {
  array.sort((a, b) => a - b);
  return array[~~(array.length / 2)];
}
