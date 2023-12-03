// 냐 풀이
function solution(order) {
  return [...order.toString()].reduce((acc, el) => {
    const num = Number(el);
    return num === 3 || num === 6 || num == 9 ? (acc = acc + 1) : acc;
  }, 0);
}

// 다른 사람 풀이
function solution(order) {
  return ("" + order).split(/[369]/).length - 1;
}
