function solution(s) {
  const newMap = new Map();
  [...s].forEach((e) => {
    if (newMap.has(e)) {
      newMap.set(e, newMap.get(e) + 1);
    } else {
      newMap.set(e, 1);
    }
  });

  return [...s]
    .filter((e) => newMap.get(e) === 1)
    .sort()
    .join("");
}

function solution(s) {
  let res = [];
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  return res.sort().join("");
}
