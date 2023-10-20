// 내 풀이
function solution(array) {
  //배열의 길이가 1인경우 바로 해당 값 return
  if (array.length === 1) {
    return array[0];
  }

  let obj = new Object();

  //배열을 돌면서 객체에 해당하는 key가 있으면 value에 +1 해주고 없으면 추가
  array.map((e) => {
    const key = e;
    if (obj[e] === undefined) {
      obj[e] = 1;
    } else {
      obj[e] = obj[e] + 1;
    }
  });

  const valueArr = Object.values(obj);
  const max = Math.max(...valueArr);
  let count = 0;

  //최빈값이 여러개인지 판별
  valueArr.map((e) => {
    if (e === max) {
      count++;
    }
  });

  const num = parseInt(Object.keys(obj).filter((item) => obj[item] === max));

  return count > 1 ? -1 : num;
}

// 다른 사람 풀이
function solution(array) {
  let m = new Map();
  for (let n of array) m.set(n, (m.get(n) || 0) + 1);
  m = [...m].sort((a, b) => b[1] - a[1]);
  return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}
