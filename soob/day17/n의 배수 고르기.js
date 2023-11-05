// 내 풀이
function solution(n, numlist) {
  return numlist.filter((e) => e % n === 0);
}

// numlist 배열에서 각 수가 n으로 나누었을때 나누어 떨어지는 판별 후 true인 값만 배열로 반환
