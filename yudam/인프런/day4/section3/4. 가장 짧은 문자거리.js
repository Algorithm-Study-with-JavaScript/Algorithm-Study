function solution(s, t) {
  const arr = s.split("");

  const indexArr = [];

  arr.forEach((e, i) => {
    if (e === t) {
      indexArr.push(i);
    }
  });
  
  return arr.map((e, i) => {
    const distance = [];
    indexArr.forEach((j) => {
      distance.push(Math.abs(i - j));
    });
    return Math.min(...distance);
  });
}

let str = "teachermode";
console.log(solution(str, "e"));

// function solution2(s, t) {
//   let answer = [];
//   let p = 1000;
//   for (let x of s) {
//     if (x === t) {
//       p = 0;
//       answer.push(p);
//     } else {
//       p++;
//       answer.push(p);
//     }
//   }
//   p = 1000;
//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] === t) p = 0;
//     else {
//       p++;
//       answer[i] = Math.min(answer[i], p);
//     }
//   }
//   return answer;
// }
