function solution(my_string) {
  var regex = /[aeiou]/g;
  my_string.replace(regex, "");

  return my_string;
}
function solution(my_string) {
  return Array.from(my_string)
    .filter((t) => !["a", "e", "i", "o", "u"].includes(t))
    .join("");
}
