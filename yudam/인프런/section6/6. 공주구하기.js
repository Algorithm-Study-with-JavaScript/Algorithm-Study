function solution(n, k) {
  const stack = [];
  for (let i = 1; i <= n; i++) {
    stack.push(i);
  }

  // 3번째 왕자를 찾아내야하므로 초기값 3으로 설정
  let count = 3;

  let i = 0;

  while (true) {
    if (stack.length === 1) {
      break;
    }

    // stack의 마지막 요소까지 순회했으면 다시 앞 요소부터 살펴봐야 하므로 인덱스 초기화
    if (i === stack.length) {
      i = 0;
    }

    // 한 명씩 보면서 count 줄여나가기
    count--;

    // count가 0이 되면
    if (count === 0) {
      // 그 왕자 제거하고 count 초기화
      stack.splice(i, 1);
      count = 3;
      // i-- 를 해주는 이유는 왕자 하나가 빠지면서 인덱스가 하나씩 뒤로 밀리기 때문
      i--;
    }
    i++;
  }
  return stack;
}

function solution2(n, k) {
  const queue = Array.from({ length: n }, (v, i) => i + 1);

  let count = k;
  while (true) {
    if (queue.length === 1) break;
    count--;
    if (count === 0) {
      queue.shift();
      count = k;
    } else {
      const element = queue.shift();
      queue.push(element);
    }
  }
  return queue;
}
console.log(solution2(8, 3));
