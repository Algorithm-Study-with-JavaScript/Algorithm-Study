function solution(array, height) {
  return array.filter((e) => e > height).length;
}