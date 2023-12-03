// 내 풀이
function solution(array) {
  return [
    [...array].sort((a, b) => b - a)[0],
    array.indexOf([...array].sort((a, b) => b - a)[0]),
  ];
}

// 다른 사람 풀이
function solution(array) {
  let max = Math.max(...array);
  return [max, array.indexOf(max)];
}
