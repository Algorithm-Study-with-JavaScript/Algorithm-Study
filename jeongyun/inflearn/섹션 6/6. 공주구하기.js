const mySolution = (n, k) => {
  let queue = Array.from({ length: n }, (_, idx) => idx + 1);
  let idx = 0;

  while (queue.length > 1) {
    idx = (idx + k - 1) % queue.length;
    queue.splice(idx, 1);
  }

  return queue[0];
};

console.log(mySolution(8, 3));

// 강의 풀이
function solution(n, k) {
  let answer;
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }
  return answer;
}

console.log(solution(8, 3));
