// 다른 사람 풀이 (1)
function solution(babbling) {
  var answer = 0;
  const regex = /^(aya|ye|woo|ma)+$/; // |는 or, $는 으로끝남

  babbling.forEach(word => {
    if (regex.test(word)) answer++;  
  })  //test로 만족하는지 판별

  return answer;
}
