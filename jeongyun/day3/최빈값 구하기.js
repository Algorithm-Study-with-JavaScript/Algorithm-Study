const solution = (array) => {
  const count = {};
  let maxCount = 0;
  let mode = -1;

  for (const num of array) {
    if (count[num] === undefined) {
      count[num] = 0;
    }
    count[num]++;

    if (count[num] > maxCount) {
      maxCount = count[num];
      mode = num;
    } else if (count[num] === maxCount) {
      mode = -1;
    }
  }

  return mode;
};

// 다른 사람 풀이
function solution(array) {
  let m = new Map();
  for (let n of array) m.set(n, (m.get(n) || 0) + 1);
  m = [...m].sort((a, b) => b[1] - a[1]);
  return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}
