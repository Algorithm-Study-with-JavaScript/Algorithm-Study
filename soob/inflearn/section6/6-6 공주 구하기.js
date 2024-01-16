// 강의 풀이
// 앞에서 꺼내서 뒤로 넣음
// 3번은 그냥 꺼내서 없애버림

function solution(n, k) {
  let answer;
  let queue = Array.from({ length: n }, (v, i) => i + 1);

  // 길이가 0일때 멈춤
  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    //k번째 제외됨
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }
  return answer;
}

console.log(solution(8, 3));
