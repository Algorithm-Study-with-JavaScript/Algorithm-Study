// 내 풀이
function solution(dots) {
  return dots
    .reduce((acc, el, index) => {
      let arr = acc;
      for (let i = index + 1; i < dots.length; i++) {
        const m = ((el[1] - dots[i][1]) / (el[0] - dots[i][0])).toFixed(2);
        const [x, y] = [0, 1, 2, 3].filter((e) => e !== index && e !== i);
        const n = (
          (dots[x][1] - dots[y][1]) /
          (dots[x][0] - dots[y][0])
        ).toFixed(2);
        arr.push(m === n);
      }
      return arr;
    }, [])
    .some((e) => e)
    ? 1
    : 0;
}

// 점2개 선택해서 기울기, 선택되지 않은 두 점 기울기 비교 후 동일하면 true 리턴
// 하나라도 true가 있다면 1리턴

// 다른 사람 풀이
function solution(dots) {
  if (calculateSlope(dots[0], dots[1]) === calculateSlope(dots[2], dots[3]))
    return 1;
  if (calculateSlope(dots[0], dots[2]) === calculateSlope(dots[1], dots[3]))
    return 1;
  if (calculateSlope(dots[0], dots[3]) === calculateSlope(dots[1], dots[2]))
    return 1;
  return 0;
}

function calculateSlope(arr1, arr2) {
  return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0]);
}
