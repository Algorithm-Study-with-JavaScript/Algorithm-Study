// 내 풀이
function solution(s) {
  const obj = {};
  const arr = [...s];
  arr.map((e) => {
    if (obj[e] === undefined) {
      return (obj[e] = 1);
    }
    return (obj[e] = obj[e] + 1);
  });
  return Object.keys(obj)
    .filter((e) => obj[e] === 1)
    .sort((a, b) => {
      if (a < b) return -1;
      else if (b < a) return 1;
      else return 0;
    })
    .join("");
}

// 다른 사람 풀이
function solution(s) {
  let res = [];
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  return res.sort().join("");
}
