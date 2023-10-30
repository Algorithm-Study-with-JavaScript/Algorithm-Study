function solution(array, n) {
  array.sort((a, b) => a - b);
  const newArray = array.map((element) => Math.abs(n - element));
  return array[newArray.indexOf(Math.min(...newArray))];
}
