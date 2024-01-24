const mySolution = (need, plan) => {
  const queue = [...need];

  for (const x of plan) {
    if (queue.length > 0 && x === queue[0]) {
      queue.shift();
    }
  }

  return queue.length === 0 ? "YES" : "NO";
};

console.log(mySolution("CBA", "CBDAGE"));

// 강의 풀이
function solution(need, plan) {
  let answer = "YES";
  let queue = need.split("");
  for (let x of plan) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) return "NO";
    }
  }
  if (queue.length > 0) return "NO";
  return answer;
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
