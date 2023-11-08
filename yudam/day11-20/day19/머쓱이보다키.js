function solution(array, height) {
  return array.filter((e) => e > height).length;
}
function solution(array, height) {
  let result = 0;
  array.map((arr) => height < arr && result++);

  return result;
}
