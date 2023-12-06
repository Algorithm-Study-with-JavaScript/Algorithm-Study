function solution(s){
  let answer = s.replace(/A/g, "#")
  // let answer = s.replaceAll("A", "#")
  return answer;
}

let str="BANANA";
console.log(solution(str));