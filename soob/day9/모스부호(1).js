const morse = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
};

// 내 풀이

function solution(letter) {
  var answer = "";
  const letterArr = letter.split(" ");
  letterArr.map((e) => {
    answer = answer + morse[Object.keys(morse).find((key) => key === e)];
  });
  return answer;
}
// 공백으로 나누어진 letter 문자열을 split을 이용해서 배열로 바꿈
// 배열을 돌면서 각 값에 맞는 값을 찾아줌
// Object.keys()를 이용해서 morse객체에서 keyr값을 배열로 가져온 후 배열의 값과 일치하는 key를 find를 이용해서 찾음
// 그 후 morse객체에서 찾은 key에 해당하는 value값을 가져온 후 answer 문자열에 더해줌
// 최종적으로 letterArr를 다 돈 후 answer를 리턴

// 다른 사람 풀이
function solution(letter) {
  return letter.split(" ").reduce((prev, curr) => prev + morse[curr], "");
}
