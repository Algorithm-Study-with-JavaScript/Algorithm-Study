function solution(array) {
  // 오름차순 정렬 
  array = array.sort((a, b) => a - b);
  return array[Math.trunc(array.length / 2)];
}


function solution(array) {
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}