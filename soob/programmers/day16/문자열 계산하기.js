// 내 풀이
function solution(my_string) {
  var answer = 0;
  const arr = my_string.split(" ");
  arr.map((e, idx) => {
    if (idx % 2 !== 0 && idx !== 0) {
      const a = Number(arr[idx - 1]);
      const b = Number(arr[idx + 1]);
      answer =
        idx === 1
          ? answer + (e === "+" ? a + b : a - b)
          : e === "+"
          ? answer + b
          : answer - b;
    }
  });
  return answer;
}

// 다른 사람 풀이
function solution(my_string) {
  const arr = my_string.split(" ").filter((e) => e);
  while (arr.length > 1)
    arr.unshift(+arr.shift() + (arr.shift() === "+" ? 1 : -1) * arr.shift());
  return arr[0];
}
