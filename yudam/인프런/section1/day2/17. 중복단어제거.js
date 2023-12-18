function solution(s) {
  // 1번
  // const newSet = new Set(str);
  // return newSet;

  // 2번
  // for (let i = 0; i < s.length; i++) {
  //   if (s.indexOf(s[i]) === i) {
  //     console.log(s[i]);
  //   }
  // }

  // 3번
  return str.filter((e, i) => {
    return s.indexOf(e) === i;
  });
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
