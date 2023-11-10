// 내 풀이
function solution(array, n) {
  return array.reduce((acc, el) => {
    if (el === n) return (acc = acc + 1);
    return acc;
  }, 0);
}

// 다른 사람 풀이
function solution(array, n) {
  var answer = 0;
  let Array = array.filter((item) => item === n);
  answer = Array.length;

  return answer;
}
