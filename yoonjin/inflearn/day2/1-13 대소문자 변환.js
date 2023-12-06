function solution(str) {
  let answer = '';
  for (let s of str) {
    if (s === s.toLowerCase()) {
      answer += s.toUpperCase();
    } else {
      answer += s.toLowerCase();
    }
  }
  console.log(answer);
}
solution('StuDY');
