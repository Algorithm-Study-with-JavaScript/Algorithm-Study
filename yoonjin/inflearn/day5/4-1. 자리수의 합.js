function digitSum(num) {
  let sum = 0;
  while (num) {
    sum += num % 10;
    num = Math.trunc(num / 10);
  }
  return sum;
}

function solution(arr) {
  let res = [];
  for (let num of arr) {
    res.push(digitSum(num));
  }

  console.log(Math.max(...res));
}
let arr1 = [128, 460, 603, 40, 521, 137, 123];
solution(arr1);
