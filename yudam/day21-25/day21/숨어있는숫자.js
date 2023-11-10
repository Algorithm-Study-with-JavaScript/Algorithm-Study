function solution(my_string) {
  const regex = /[0-9]+/g;
  return my_string.match(regex) ? my_string.match(regex).reduce((a, e) => a + +e, 0) : 0;
}
