function solution(s) {
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    if (i === s.indexOf(s[i])) {
      answer += s[i];
    }
  }
  console.log(answer);
}

solution('ksekkset');
