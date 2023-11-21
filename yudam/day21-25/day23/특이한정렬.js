function solution(numlist, n) {
  const map = new Map();
  numlist.forEach((e, i) => {
    map.set(e, Math.abs(n - e));
  });

  const array = [...map];
  array.sort((a, b) => {
    // 거리가 같으면 더 큰 수를 비교하여 정렬
    if (a[1] === b[1]) {
      return b[0] - a[0];
    }
    return a[1] - b[1];
  });

  return array.reduce((a, e) => {
    a.push(e[0]);
    return a;
  }, []);
}
///

function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}
