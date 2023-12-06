function solution(s) {
  const newArray = s.map((e) => e.length);
  const index = newArray.indexOf(Math.max(...newArray));
  return s[index];
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
