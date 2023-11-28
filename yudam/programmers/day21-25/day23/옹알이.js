function solution(babbling) {
  let count = 0;
  babbling.forEach((e) => {
    let copyString = e.slice();
    let i = 0;
    while (i <= 5) {
      if (copyString === "") {
        count++;
        break;
      }
      // ^은 문자열의 시작을 의미한다.
      copyString = copyString.replaceAll(/^aya|^ye|^woo|^ma/g, "");

      i++;
    }
  });
  return count;
}

function solution(babbling) {
  var answer = 0;
  // +는 앞선 패턴이 최소 한 번이상 반복되는 문자열을 의미한다.
  // $은 문자열의 마지막을 의미한다.
  const regex = /^(aya|ye|woo|ma)+$/;

  babbling.forEach((word) => {
    if (regex.test(word)) answer++;
  });

  return answer;
}

function solution(babbling) {
  const wordSet = new Set(["aya", "ye", "woo", "ma"]);
  let result = 0;

  for (const word of babbling) {
    let remainWord = "";
    let prevWord = "";
    for (const char of word) {
      remainWord += char;
      if (wordSet.has(remainWord)) {
        if (remainWord === prevWord) break;
        prevWord = remainWord;
        remainWord = "";
      }
    }
    if (remainWord === "") result++;
  }
  return result;
}
