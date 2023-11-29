const solution = (babbling) => {
  const array = ["aya", "ye", "woo", "ma"];

  let answer = 0;
  let temp = "";

  for (const word of babbling) {
    for (const i in word) {
      temp += word[i];

      for (const k of array) if (temp === k) temp = "";

      if (+i === word.length - 1 && temp.length === 0) {
        answer++;
      }
    }

    temp = "";
  }
  return answer;
};

// 다른 사람 풀이
function solution(babbling) {
  var answer = 0;
  const regex = /^(aya|ye|woo|ma)+$/;

  babbling.forEach((word) => {
    if (regex.test(word)) answer++;
  });

  return answer;
}
