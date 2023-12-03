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
// 문자열 letter을 split 메소드를 통해서 배열로 변환
// reduce 메소드 사용 -> prev는 직전 콜백함수가 리턴한 값, 초기값은 빈 문자열, curr은 배열을 순회하며 해당하는 값
// morse 객체의 curr에 해당하는 value를 찾아서 prev에 추가해줌 -> prev는 문자열로 모스부호를 해석한 결과값을 담음
// 최종적으로 morse 객체에서 curr에 해당하는 value가 모인 문자열이 리턴
