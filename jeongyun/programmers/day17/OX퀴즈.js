const solution = (quiz) => {
  const results = [];

  for (const arr of quiz) {
    const equation = arr.replace("=", "===");
    const isCorrect = eval(equation);

    if (isCorrect) {
      results.push("O");
    } else {
      results.push("X");
    }
  }

  return results;
};

// 다른 사람 풀이
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
