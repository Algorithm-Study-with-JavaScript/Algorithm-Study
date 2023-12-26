function solution2(str1, str2) {
  let answer = "YES";
  const map = new Map();
  for (let x of str1) {
    if (!map.has(x)) {
      map.set(x, 1);
    } else {
      map.set(x, map.get(x) + 1);
    }
  }
  // console.log(map);

  for (let y of str2) {
    if (!map.has(y) || map.get(y) === 0) {
      answer = "NO";
    } else {
      map.set(y, map.get(y) - 1);
    }
  }
  console.log(map);
  return answer;
}

function solution(s, t) {
  
  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
