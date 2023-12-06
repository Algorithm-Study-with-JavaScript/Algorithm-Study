function solution(arr) {
  const newArray = [];
  newArray.push(arr[0]);

  let front = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (front < arr[i]) {
      newArray.push(arr[i]);
      front = arr[i];
    }
  }
  return newArray.length;
}

function solution2(arr) {
  let answer = 1;
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if(arr[i] > max){
      answer++;
      max = arr[i];
    }
  }
  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
console.log(solution2(arr));
