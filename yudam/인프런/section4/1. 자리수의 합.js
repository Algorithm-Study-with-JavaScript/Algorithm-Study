function solution(n, arr) {
  const newArray = arr.map((e) => {
    const splitArray = e.toString().split("");
    return splitArray.reduce((a, e) => a + +e, 0);
  });

  const max = Math.max(...newArray);

  let index = newArray.indexOf(max);

  let indexArray = [];
  while (index !== -1) {
    indexArray.push(index);
    index = newArray.indexOf(max, index + 1);
  }

  return Math.max(...indexArray.map((e) => arr[e]));
}

function solution2(n, arr) {
  let max = 0;
  let answer = 0;

  for (let e of arr) {
    let sum = 0;
    temp = e;
    while (temp > 0) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }

    if (max < sum && answer < e) {
      max = sum;
      answer = e;
    }
    if (max === sum && answer < e) {
      answer = e;
    }
  }
  console.log(max, answer);
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution2(7, arr));
