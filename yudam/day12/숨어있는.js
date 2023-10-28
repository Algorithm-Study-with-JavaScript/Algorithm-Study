function solution(my_string) {
  let regex = /\d/g;
  let arr = my_string.match(regex).map(Number);

  return arr.reduce((a, e) => a + e, 0);
}
