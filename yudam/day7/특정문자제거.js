function solution(my_string, letter) {
  const arr = [...my_string];
  const filteredArr = arr.filter(element => element !== letter);
  
  return filteredArr.join("");
}



function solution(my_string, letter) {
    const answer = my_string.split(letter).join('')
    return answer;
}