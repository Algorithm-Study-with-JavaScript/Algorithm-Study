function solution(s){  

  return s.split("").map((e) =>{
    if(e === e.toUpperCase()){
      return e.toLowerCase();
    } else {
      return e.toUpperCase();
    }
  }).join("")
}

console.log(solution("StuDY"));