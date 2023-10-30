function solution(cipher, code) {
  const newArray = Array.from(cipher);
  return newArray.filter((e, i) => (i + 1) % code === 0).join("");
}
