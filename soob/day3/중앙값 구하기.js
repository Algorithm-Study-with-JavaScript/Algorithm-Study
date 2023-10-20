// 내 풀이
function solution(array) {
  const centerNum = (array.length - 1) / 2;
  array.sort((a, b) => b - a);
  return array[centerNum];
}

// 다른 사람 풀이
function solution(array) {
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}
