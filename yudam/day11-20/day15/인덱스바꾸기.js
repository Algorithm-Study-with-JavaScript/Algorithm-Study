function solution(my_string, num1, num2) {
  const newArray = [...my_string];
  let num1_element = newArray[num1];
  newArray.splice(num1, 1, newArray[num2]);
  newArray.splice(num2, 1, num1_element);

  return newArray.join("");
}


function solution(my_string, num1, num2) {
  my_string = my_string.split('');
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join('');
}