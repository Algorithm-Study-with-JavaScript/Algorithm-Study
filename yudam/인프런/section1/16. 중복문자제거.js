function solution(s) {
  // 1번 풀이
  // let answer = "";
  // for (let i = 0; i < s.length; i++) {
  //   if (s.indexOf(s[i]) === i) {
  //     answer += s[i];
  //   }
  // }

  // 2번 풀이
  // const newSet = new Set(s);
  // return [...newSet].join("");

  // 3번 풀이 - 개수 구하기

  let answer = 0;
  let pos = s.indexOf("k");

  if (pos !== -1) {
    answer++;
    pos = s.indexOf("k", pos + 1);
  }
}
console.log(solution("ksekksetk"));
