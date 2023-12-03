function solution(cipher, code) {
  const newArray = Array.from(cipher);
  return newArray.filter((e, i) => (i + 1) % code === 0).join("");
}
function solution(cipher, code) {
  var answer = "";
  for (let i = code - 1; i < cipher.length; i += code) {
    answer += cipher[i];
  }
  return answer;
}
