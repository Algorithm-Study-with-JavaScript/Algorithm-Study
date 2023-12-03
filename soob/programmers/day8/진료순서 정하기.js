// 내 풀이
function solution(emergency) {
  var answer = [];
  const sortArr = [...emergency].sort((a, b) => b - a);
  emergency.map((e) => {
    answer.push(sortArr.indexOf(e) + 1);
  });

  return answer;
}

// 다른 사람 풀이
function solution(emergency) {
  let sorted = emergency.slice().sort((a, b) => b - a);
  return emergency.map((v) => sorted.indexOf(v) + 1);
}
