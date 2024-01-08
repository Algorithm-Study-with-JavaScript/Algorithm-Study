// 나중에 들어간 게 먼저 나온다
// Last In First Out
function solution(s) {
  const arr = [];
  let answer = "YES";
  for (let x of s) {
    if (x === "(") {
      arr.push(x);
    } else {
      arr.pop();
    }
    console.log(arr);

    if (arr.length === 0 && x === ")") {
      return "NO";
    }
  }

  if (arr.length) {
    answer = "NO";
  } else {
    answer = "YES";
  }

  return answer;
}

let a = "(()(()))(()))))))";
console.log(solution(a));
