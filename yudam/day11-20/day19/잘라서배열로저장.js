function solution(my_str, n) {
  let array = [];
  for (let i = 0; i < my_str.length; i += n) {
    array.push(my_str.slice(i, n + i));
  }
  return array;
}
