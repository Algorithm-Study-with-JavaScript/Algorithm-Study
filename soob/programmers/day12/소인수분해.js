// 내 풀이
function solution(n) {
  let num = 2;
  let answer = [];
  while (n >= num) {
    if (n % num === 0) {
      answer.push(num);
      n = n / num;
    } else num++;
  }
  return [...new Set(answer)];
}

// 다른 사람 풀이
function solution(n) {
  var answer = [];

  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      n = n / i;
      answer.push(i);
    }
  }

  return [...new Set(answer)];
}
