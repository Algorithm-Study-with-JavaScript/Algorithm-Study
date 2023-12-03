// 내 풀이
function solution(numbers, k) {
  if (2 * (k - 1) >= numbers.length) {
    while (numbers.length <= 2 * (k - 1)) {
      numbers = [...numbers, ...numbers];
    }
    return numbers[2 * (k - 1)];
  }
  return numbers[2 * (k - 1)];
}
// 2*(k-1)은 한명씩 건너서 던지니까 k번 던진 마지막 수의 인덱스
// 만약 배열의 길이보다 해당 인덱스가 더 크면 배열을 반복해주는 작업 진행함
// 스프레드 연산자를 통해 필요한만큼 길이를 늘려준 후 해당 배열에서 k번 던진 마지막 수의 인덱스에 해당하는 수 리턴
// 만약 배열의 길이가 더 크다면 바로 배열에서 k번 던진 마지막 수의 인덱스에 해당하는 수 리턴

// 다른 사람 풀이
function solution(numbers, k) {
  return numbers[(--k * 2) % numbers.length];
}
