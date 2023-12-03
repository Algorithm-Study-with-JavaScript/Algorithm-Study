function solution(my_string) {
  return [...my_string]
    .map((e) => {
      return e.toLowerCase();
    })
    .sort()
    .join("");
}

function solution(s) {
  return [...s.toLowerCase()].sort().join("");
}
