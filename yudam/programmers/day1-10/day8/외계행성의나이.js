function solution(age) {
  let match = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
    6: "g",
    7: "h",
    8: "i",
    9: "j",
  };

  let stringNumber = age.toString().split(""); // "23" => ["2", "3"]
  return stringNumber.map((element) => match[element]).join(""); // ["c", "d"] => "cd"
}

function solution(age) {
  return age
    .toString()
    .split("")
    .map((v) => "abcdefghij"[v])
    .join("");
}

// 인덱스는 숫자로 접근하지 않고 숫자로 변환될 수 있는 문자열로 접근해도 됨
// 예) a['2'] === a[2]