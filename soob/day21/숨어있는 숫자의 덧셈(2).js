// 내 풀이
function solution(my_string) {
  return my_string
    .split(/[a-z]|[A-Z]/)
    .filter((e) => e !== "")
    .reduce((acc, el) => {
      return (acc = acc + Number(el));
    }, 0);
}

// 다른 사람 풀이
function solution(my_string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}
