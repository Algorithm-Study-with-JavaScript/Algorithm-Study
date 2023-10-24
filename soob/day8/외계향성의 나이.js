//내 풀이
function solution(age) {
  let answer = "";
  const arr = [...age.toString()];
  const strArr = "abcdefghij";
  arr.map((e) => {
    answer = answer + strArr[e];
  });
  return answer;
}

// 다른 사람 풀이
function solution(age) {
  return age
    .toString()
    .split("")
    .map((v) => "abcdefghij"[v])
    .join("");
}
