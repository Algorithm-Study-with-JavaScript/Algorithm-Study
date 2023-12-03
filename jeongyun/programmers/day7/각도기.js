const solution = (angle) => (angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4);

// 다른 사람 풀이
function solution(angle) {
  return [0, 90, 91, 180].filter((x) => angle >= x).length;
}

/* e.g.
  1. angle이 100이면 filter로 배열을 돌면서
  2. 100 >= 0은 true니까 배열은 [0]
  3. 100 >= 90은 true니까 배열은 [0, 90]
  4. 100 >= 91은 true니까 배열은 [0, 90, 91]
  5. 100 >= 180은 false니까 배열에 추가 x
  6. filter를 거친 배열의 length는 3
*/
