function solution(strlist) {
  return strlist.map((e) => e.length);
}

function solution(strlist) {
  return strlist.reduce((a, b) => [...a, b.length], []);
}
