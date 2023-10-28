function solution(my_string) {
  var regex = /[aeiou]/g;
  my_string.replace(regex, '')

  console.log(my_string);

  return my_string;
}
