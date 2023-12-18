function solution(s) {
  let arr = s.split("");
  let current = "";
  let count = 1;
  let answer = "";

  for (let i = 0; i < arr.length; i++) {
    current = arr[i];

    if (current === arr[i + 1]) {
      count++;
    } else {
      answer += current + (count > 1 ? count : "");
      count = 1;
    }
  }
  return answer;
}

function solution2(s) {
  let answer = "";
  let cnt = 1;
  s = s + " ";
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += s[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }
  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
