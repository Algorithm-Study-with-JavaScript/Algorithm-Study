function solution(board, moves) {
  const stack = [];
  let answer = 0;
  // 모든 움직임을 살피면서
  for (let x of moves) {
    // board 길이만큼 순회
    for (let i = 0; i < board.length; i++) {
      // moves는 1부터 시작하니 x - 1, 하나하나는 "열"을 의미
      // 열을 고정하고 행을 바꿔가며 하나의 열에서 가장 위에 있는 값을 살핌
      if (board[i][x - 1] !== 0) {
        // stack에 넣기 전 stack의 마지막 값과 같은지 확인
        if (stack[stack.length - 1] === board[i][x - 1]) {
          // 같으면 인형이 두 개 터지므로 pop하고 answer += 2
          stack.pop();
          answer += 2;
        } else {
          // 같으면 push 하지 않고, 같지 않을 때만 Push
          stack.push(board[i][x - 1]);
        }
        // pop한 인형의 위치에 해당하는 값을 0으로 만들어줌
        board[i][x - 1] = 0;
        // 각 열 중 가장 위의 값을 찾아 pop했으므로 더 이상 for 문을 살필 필요가 없으므로 break
        break;
      }
    }
  }
  return answer;
}

function solution2(board, moves) {
  let answer = 0;
  let stack = [];
  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos - 1] !== 0) {
        let tmp = board[i][pos - 1];
        board[i][pos - 1] = 0;
        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(tmp);
        break;
      }
    }
  });

  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
