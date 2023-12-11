function solution(str) {
  let answer = '';
  let cnt = 1;
  const N = str.length;
  for (let i = 0; i < N; i++) {
    if (str[i] === str[i - 1]) {
      cnt += 1;
    } else {
      if (cnt > 1) answer += cnt;
      answer += str[i];
      cnt = 1;
    }
  }
  console.log(answer);
}
let str1 = 'KKHSSSSSSSE';
solution(str1);
