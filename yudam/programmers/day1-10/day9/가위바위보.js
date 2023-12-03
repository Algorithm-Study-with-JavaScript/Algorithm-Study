function solution(rsp) {
  const p = [...rsp];
  const q = p.map((e) => (e === "2" ? 0 : e === "0" ? 5 : 2));
  return q.join("");
}

function solution(rsp) {
  let arr = {
    2: 0,
    0: 5,
    5: 2,
  };
  var answer = [...rsp].map((v) => arr[v]).join("");
  return answer;
}
