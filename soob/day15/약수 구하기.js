// 내 풀이
function solution(n) {
  var answer = [];
  let num = 1;
  while (n >= num) {
    if (n % num === 0) {
      answer.push(num);
    }
    num++;
  }

  return answer;
}
// n이 num보다 크거나 같을 때가지 반복함
// n/num 나누어 떨어지면 answer에 추가
// num++하며 진행

// 다른 사람 풀이
function solution(n) {
  return Array(n)
    .fill(0)
    .map((v, index) => v + index + 1)
    .filter((v) => n % v === 0);
}
// Array 생성자로 n를 length로 가지는 빈 배열 생성
// 이 배열을 fill 메소드를 사용해 0으로 채움
// map 메소드를 사용해서 각 index+1한 값을 리턴해 배열 반환
// 해당 배열에서 filter 메소드를 사용해서 n/v가 나누어떨어지는 수만 반환한 배열을 반환
