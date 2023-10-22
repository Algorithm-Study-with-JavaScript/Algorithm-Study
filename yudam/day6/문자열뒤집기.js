function solution(my_string) {
  console.log([...my_string]);
  var answer = [...my_string].reverse().join("");
  return answer;
}

function solution(my_string) {
  return my_string.split('').reverse().join('');
}