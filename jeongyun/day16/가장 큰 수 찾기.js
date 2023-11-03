const solution = (array) => {
  const sortArray = [...array].sort((a, b) => b - a);
  return [sortArray[0], array.indexOf(sortArray[0])];
};

// 다른 사람 풀이
function solution(array) {
  return [Math.max(...array), array.indexOf(Math.max(...array))];
}
