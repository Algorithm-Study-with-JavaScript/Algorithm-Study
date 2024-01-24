const mySolution = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
};

console.log(mySolution([11, 7, 5, 6, 10, 9]));

// 강의 풀이 1
function solution1(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i],
      j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = tmp;
  }
  return answer;
}

let arr1 = [11, 7, 5, 6, 10, 9];
console.log(solution1(arr1));

// 강의 풀이 2
function solution2(arr) {
  let answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < answer.length; j++) {
      if (arr[i] < answer[j]) {
        answer.splice(j, 0, arr[i]);
        break;
      }
    }
  }
  return answer;
}

let arr2 = [11, 7, 5, 6, 10, 9];
console.log(solution2(arr2));
