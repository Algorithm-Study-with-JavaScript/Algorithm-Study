// 내 풀이
function solution(my_string, num1, num2) {
  let arr = my_string.split("");

  let str1 = arr[num1];
  let str2 = arr[num2];

  arr.splice(num1, 1, str2);
  arr.splice(num2, 1, str1);

  return arr.join("");
}

// 다른 사람 풀이
function solution(my_string, num1, num2) {
  my_string = my_string.split("");
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join("");
}
