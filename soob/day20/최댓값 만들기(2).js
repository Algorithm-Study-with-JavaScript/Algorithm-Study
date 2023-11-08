// 내 풀이
function solution(numbers) {
  numbers.sort((a, b) => a - b);
  const a = numbers[0] * numbers[1];
  const b = numbers[numbers.length - 1] * numbers[numbers.length - 2];
  return a < b ? b : a;
}
// 정렬 후 0,1번 인덱스 값 곱한 값 a, 마지막 인덱스, 마지막 인덱스-1 인덱스 값 곱한 값 b
// a,b 비교 후 큰 값 리턴

// 다른 사람 풀이
function solution(numbers) {
  const N = numbers.length;

  numbers.sort((a, b) => a - b);

  return Math.max(numbers[N - 1] * numbers[N - 2], numbers[0] * numbers[1]);
}

// N에 numbers의 길이를 할당
// numbers를 정렬
// Math.max 사용해서 큰값 리턴
