function solution(polynomial) {
  const splitArray = polynomial.split(" + ");
  const xs = splitArray.filter((e) => e.includes("x"));
  console.log(xs);
  const 계수 = xs.map((e) => e.replace("x", "1"));
  console.log(계수);
  console.log(계수.reduce((a, e) => Number(a) + Number(e), 0));
  // const consts = splitArray.filter((e) => !e.includes("x"));
}

/* 
x에 계수가 있는 경우
없는 경우
상수인 경우 */