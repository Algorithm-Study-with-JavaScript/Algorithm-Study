function solution(s, t) {
  let answer = s.split(t);
  return answer.length - 1;
  // const reg = new RegExp(`[${t}]`, "g");
  // return s.match(reg).length;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "G"));
