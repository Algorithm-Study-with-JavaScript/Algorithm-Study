function solution(array, n) {
  array.sort((a, b) => a - b);
  const newArray = array.map((element) => Math.abs(n - element));
  return array[newArray.indexOf(Math.min(...newArray))];
}


// reduce에서 초기값을 설정하지 않는 경우, a는 배열의 첫 요소에부터 시작, c는 두 번째 요소에서부터 시작 된다.
function solution(array, n) {
  return array.reduce((a,c)=> Math.abs(a-n) < Math.abs(c-n) ? a : Math.abs(a-n) === Math.abs(c-n) ? Math.min(a, c) : c);
}
