// 내 풀이
function solution(my_string) {
  var arr = [...my_string].filter((e) => Number(e) || e === "0");
  return arr.map(Number).sort();
}

// 다른 사람 풀이
function solution(my_string) {
  return my_string
    .match(/\d/g)
    .sort((a, b) => a - b)
    .map((n) => Number(n));
}
