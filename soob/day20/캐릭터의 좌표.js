// 내 풀이
function solution(keyinput, board) {
  let horizontal = 0;
  let vertical = 0;
  const [maxHorizontal, maxVertical] = board.map((e) => e / 2);
  keyinput.map((e) => {
    if (e === "left" || e === "right") {
      const a = e === "left" ? horizontal - 1 : horizontal + 1;
      if (Math.abs(a) < maxHorizontal) {
        return e === "left"
          ? (horizontal = horizontal - 1)
          : (horizontal = horizontal + 1);
      }
      return;
    }
    const b = e === "down" ? vertical - 1 : vertical + 1;
    if (Math.abs(b) < maxVertical) {
      return e === "down"
        ? (vertical = vertical - 1)
        : (vertical = vertical + 1);
    }
    return;
  });

  let answer = [];

  if (Math.abs(horizontal) > maxHorizontal) {
    answer.push(
      horizontal < 0
        ? Math.floor(maxHorizontal) * -1
        : Math.floor(maxHorizontal)
    );
  } else {
    answer.push(horizontal);
  }

  if (Math.abs(vertical) > maxVertical) {
    answer.push(
      vertical < 0 ? Math.floor(maxVertical) * -1 : Math.floor(maxVertical)
    );
  } else {
    answer.push(vertical);
  }

  return answer;
}

// 다른 사람 풀이
function solution(keyinput, board) {
  let res = [0, 0];
  for (let p of keyinput) {
    switch (p) {
      case "left":
        if (-res[0] < board[0] / 2 - 1) res[0]--;
        break;
      case "right":
        if (res[0] < board[0] / 2 - 1) res[0]++;
        break;
      case "up":
        if (res[1] < board[1] / 2 - 1) res[1]++;
        break;
      case "down":
        if (-res[1] < board[1] / 2 - 1) res[1]--;
        break;
    }
  }
  return res;
}
