function solution(s) {
  let answer = 0;
  for (let i of s) {
    if (i === i.toUpperCase()) {
      answer++;
    }
  }
  return answer;
}

let str="KoreaTimeGood";
console.log(solution(str));

