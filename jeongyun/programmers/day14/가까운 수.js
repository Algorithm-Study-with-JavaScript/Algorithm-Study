const solution = (array, n) => {
  let closest = array[0];
  let minDiff = Math.abs(array[0] - n);

  for (let num of array) {
    const diff = Math.abs(num - n);

    if (diff < minDiff || (diff === minDiff && num < closest)) {
      closest = num;
      minDiff = diff;
    }
  }

  return closest;
};

// 다른 사람 풀이
function solution(array, n) {
  return array.reduce((a, c) =>
    Math.abs(a - n) < Math.abs(c - n) ? a : Math.abs(a - n) === Math.abs(c - n) ? Math.min(a, c) : c
  );
}
