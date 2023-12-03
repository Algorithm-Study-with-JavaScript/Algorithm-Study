function solution(polynomial) {
  let afterSplit = polynomial.split(" + ");

  //x를 1x로 바꿈
  const changedArray = afterSplit.map((e) => {
    if (e === "x") {
      return e.replace("x", "1x");
    }
    return e;
  });

  let x = 0;
  let consts = 0;

  //x 있는 것들의 계수 구하고, 상수항끼리 더한 값을 저장
  changedArray.map((e) => {
    if (e.includes("x")) {
      e.split("x").forEach((element) => {
        x += +element;
      });
    } else {
      consts += Number(e);
    }
  });

  let plus = " + ";
  let xString = "x";
  if (x === 0) {
    x = "";
    xString = "";
    plus = "";
  }

  if (x === 1) {
    x = "";
  }
  if (consts === 0) {
    consts = "";
    plus = "";
  }

  return x + xString + plus + consts;
}

function solution(polynomial) {
  const arr = polynomial.split(" + ");
  const xNum = arr
    .filter((n) => n.includes("x"))
    .map((n) => n.replace("x", "") || "1")
    .reduce((acc, cur) => acc + parseInt(cur, 10), 0);
  const num = arr
    .filter((n) => !isNaN(n))
    .reduce((acc, cur) => acc + parseInt(cur, 10), 0);

  let answer = [];
  if (xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
  if (num) answer.push(num);

  // 둘 중에 하나라도 없으면 그냥 join 자체가 안되는 건가?
  
  return answer.join(" + ");
}
