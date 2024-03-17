function solution(need, plan) {
  const needQueue = need.split("");
  const stack = [];
  let a = "CBA";
  let b = "CBDGEA";
  // let b = "CGEADB";
  for (let x of plan) {
    if (x === needQueue[0]) {
      stack.push(x);
      needQueue.shift();
    }
  }

  if (stack.join("") === need) {
    return "YES";
  }
  return "NO";
}

function solution2(need, plan) {
  let answer = "YES";
  const needQueue = need.split("");
  for (let x of plan) {
    if (needQueue.includes(x) && needQueue[0] === x) {
      needQueue.shift();
    } else {
      answer = "NO";
    }
  }
  if (needQueue.length === 0) {
    answer = "YES";
  }
  return answer;
}

function solution3(need, plan) {
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
let b = "CBDGEA";
// let b = "CGEADB";
console.log(solution3(a, b));
