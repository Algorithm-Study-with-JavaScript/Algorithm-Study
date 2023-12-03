// 내 풀이
function solution(polynomial) {
  const arr = polynomial.split(" ");
  const x = arr.filter((e) => !e.includes("+"));
  let result = x.reduce(
    (acc, el) => {
      const a = el.split("x");
      const num = a[0] === "" ? 1 : Number(a[0]);
      if (a.length > 1) return (acc = [acc[0] + num, acc[1]]);
      return (acc = [acc[0], acc[1] + num]);
    },
    [0, 0]
  );

  result = [result[0] && (result[0] === 1 ? "x" : `${result[0]}x`), result[1]];

  if (result[0] === 0) {
    return result[1].toString();
  }
  return result[1] === 0 ? result[0].toString() : result.join(" + ");
}

// 다른 사람 풀이
function solution(polynomial) {
  const arr = polynomial.split(" + ");
  const xNum = arr
    .filter((n) => n.includes("x"))
    .map((n) => n.replace("x", "") || "1")
    .reduce((acc, cur) => acc + parseInt(cur, 10), 0);
  const num = arr
    .filter((n) => !isNaN(n))
    .reduce((acc, cur) => acc + parseInt(cur, 10), 0);

  let answer = [];
  if (xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
  if (num) answer.push(num);

  return answer.join(" + ");
}
