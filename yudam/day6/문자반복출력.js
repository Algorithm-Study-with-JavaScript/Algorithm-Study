function solution(my_string, n) {
  let iterarray = [...my_string].map(element => element.repeat(n));
  return iterarray.join('');
}

function solution(my_string, n) {
  return my_string.split('').reduce((acc, cur) => acc + cur.repeat(n), '')
}
