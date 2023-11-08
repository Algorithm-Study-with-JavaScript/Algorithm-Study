const solution = (array, height) => array.filter((item) => item > height).length;

// 다른 사람 풀이
function solution(array, height) {
  let result = 0;
  array.map((arr) => height < arr && result++);

  return result;
}
