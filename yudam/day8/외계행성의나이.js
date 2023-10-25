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

  let stringNumber = age.toString().split("");
  return stringNumber.map((element) => match[element]).join("");
}

function solution(age) {
  return age
    .toString()
    .split("")
    .map((v) => "abcdefghij"[v])
    .join("");
}
