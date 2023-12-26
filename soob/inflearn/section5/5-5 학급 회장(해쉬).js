function solution(s) {
  const obj = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
  };
  [...s].map((e) => {
    obj[e] = obj[e] + 1;
  });
  const key = Object.keys(obj);
  let max = Number.MIN_SAFE_INTEGER;
  let answer = "";

  for (let i = 1; i < key.length; i++) {
    let value = obj[key[i]];
    if (value > max) {
      answer = key[i];
      max = value;
    }
  }
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
