function minusArray(arr, start, end) {
  let number = Math.min(...arr.slice(start, end + 1));
  // console.log("number", number);
  return arr.map((element, i) => {
    if (i >= start && i <= end) {
      return element - number;
    }
    return element;
  });
}

function findLastIndex(arr, callback) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (callback(arr[i])) {
      return i;
    }
  }
  return -1;
}

function checkZero(arr) {
  return arr.some((element) => element === 0);
}

function solution(arr) {
  let count = 0;
  let array = arr;

  let i = 10;
  while (i >= 0) {
    const allZeros = array.every((value) => value === 0);
    if (allZeros) {
      break;
    }

    let start = array.findIndex((value) => value >= 1);
    let end = findLastIndex(array, (value) => value > 0);

    if (checkZero(array.slice(start, end + 1))) {
      end = start;
    }

    array = minusArray(array, start, end);
    // console.log(array);
    count++;
    // i--;
  }

  return count;
}

console.log(solution([1, 2, 4, 8, 4, 2, 1]));
console.log(solution([1, 3, 5, 7, 6, 8, 9, 5, 1]));
console.log(solution([10, 0, 10, 0, 10, 0]));
console.log(solution([5, 4, 5, 4, 5, 5]));
