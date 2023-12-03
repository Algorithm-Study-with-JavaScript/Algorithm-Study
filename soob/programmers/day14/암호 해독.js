// 내 풀이
function solution(cipher, code) {
  return [...cipher].reduce((acc, el, index) => {
    return (index + 1) % code === 0 ? (acc = acc + el) : acc;
  }, "");
}

// 다른 사람 풀이
function solution(cipher, code) {
  return cipher
    .split("")
    .filter((_, index) => (index + 1) % code === 0)
    .join("");
}
