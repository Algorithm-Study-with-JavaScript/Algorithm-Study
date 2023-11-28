function solution(my_string) {
  let regex = /\d/g;
  let regex2= /[0-9]/g;

  let arr = my_string.match(regex).map(Number);
  arr.sort((a, b) => a - b);

  return arr;
}


function solution(my_string) {
  return my_string.match(/\d/g).sort((a, b) => a - b).map(n => Number(n));
}