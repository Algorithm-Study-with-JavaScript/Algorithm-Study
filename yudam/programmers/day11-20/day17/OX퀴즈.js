function solution(quiz) {
  return quiz.map((e) => {
    let flag = 1;
    let split = "";
    const [calc, result] = e.split(" = ");
    if (calc.includes(" - ")) {
      flag *= -1;
      split = " - ";
    } else {
      split = " + ";
    }

    const [num1, num2] = calc.split(split);
    let answer = Number(num1) + Number(num2) * flag;

    return answer === Number(result) ? "O" : "X";
  });
}

function solution(quiz) {
  let answer = [];
  quiz.forEach((val) => {
    const [x, sign, y, , z] = val.split(" ");
    let sum = 0;
    if (sign === "+") {
      sum = Number(x) + Number(y);
    } else {
      sum = Number(x) - Number(y);
    }
    sum === Number(z) ? answer.push("O") : answer.push("X");
  });
  return answer;
}
