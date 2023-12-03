const solution = (age) => {
  const alphabet = "abcdefghij";
  return Array.from(age.toString())
    .map((i) => alphabet[i])
    .join("");
};

// 다른 사람 풀이
function solution(age) {
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  var answer = "";
  age = age.toString();

  for (let i = 0; i < age.length; i++) {
    answer += alphabet[age[i]];
  }
  return answer;
}
