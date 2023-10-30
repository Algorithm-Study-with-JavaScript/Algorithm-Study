// 내 풀이
function solution(my_string) {
  const answer = [...my_string].reduce((acc, el) => {
    if (!isNaN(el)) return acc + Number(el);
    return acc;
  }, 0);

  return answer;
}

// 다른 사람 풀이
function solution(my_string) {
  const answer = my_string
    .replace(/[^0-9]/g, "")
    .split("")
    .reduce((acc, curr) => acc + Number(curr), 0);
  return answer;
}
