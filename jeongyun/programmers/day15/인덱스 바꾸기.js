const solution = (my_string, num1, num2) => {
  const charArray = [...my_string];

  [charArray[num1], charArray[num2]] = [charArray[num2], charArray[num1]];

  return charArray.join("");
};

// 다른 사람 풀이
function solution(my_string, num1, num2) {
  return my_string
    .split("")
    .map((v, i) => (i === num1 ? my_string[num2] : i === num2 ? my_string[num1] : v))
    .join("");
}
