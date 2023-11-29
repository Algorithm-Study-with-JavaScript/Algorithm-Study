const solution = (n) => {
  let sum = 0;

  for (let i = 2; i <= n; i += 2) {
    sum += i;
  }

  return sum;
};

// 다른 사람 풀이
function solution(n) {
  var half = Math.floor(n / 2);
  return half * (half + 1);
}

/*
  등차수열 이용
  합 = (항의 개수 / 2) * [첫 번째 항 + 마지막 항]
  half + 1은 half의 자연수 중에 마지막항(배열 인덱스라고 생각하면 쉬움)
*/
