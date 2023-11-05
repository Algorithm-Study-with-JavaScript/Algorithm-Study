function solution(n) {
  const newArray = n.toString().split("");
  return newArray.reduce((a, e) => a + Number(e), 0);
}
function solution(n) {
  return (n + "")
    .split("")
    .map((v) => +v)
    .reduce((a, v) => a + v, 0);
}
