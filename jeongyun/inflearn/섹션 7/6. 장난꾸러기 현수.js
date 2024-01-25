const mySolution = (arr) => {
  const result = [];
  const sortArr = [...arr].sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortArr[i]) result.push(i + 1);
  }

  return result.join(" ");
};

console.log(mySolution([120, 125, 152, 130, 135, 135, 143, 127, 160]));

// 강의 풀이
function solution(arr) {
  let answer = [];
  let sortArr = arr.slice();
  sortArr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortArr[i]) answer.push(i + 1);
  }
  return answer;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));
