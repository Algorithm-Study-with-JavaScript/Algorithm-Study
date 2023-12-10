// 5*5 격자판에 아래와 같이 숫자가 적혀있습니다.
// N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합을 출력합니다.

function solution(arr) {
  let a = []; // 열
  let c = []; // 행
  let d = 0; //대각선 합1
  let f = 0; //대각선 합2
  arr.map((e, index) => {
    let b = [];
    let sum = 0;
    e.map((k, index2) => {
      sum += k;

      if (index === index2) d += k;
      if (arr.length - 1 - index === index2) f += k;

      // 열
      if (index === 0) {
        b.push(k);
      } else {
        b.push(a[index2] + k);
      }
    });
    a = b;
    c.push(sum);
  });
  const result = [...a, ...c, d, f].sort((a, b) => b - a);
  return result[0];
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
