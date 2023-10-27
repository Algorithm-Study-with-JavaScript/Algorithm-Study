const solution = (num_list, n) => {
  const result = [];
  for (let i = 0; i < num_list.length; i += n) {
    result.push(num_list.slice(i, i + n));
  }
  return result;
};

// 다른 사람 풀이
function solution(num_list, n) {
  return Array(num_list.length / n)
    .fill([])
    .map(() => num_list.splice(0, n));
}
/*
Array(num_list.length / n)은 최종 결과 배열의 행(줄) 개수를 나타냅니다.
즉, 주어진 배열 num_list의 길이를 n으로 나눈 값이 됩니다.
이렇게 하면 결과 2차원 배열의 행 개수가 결정됩니다.

fill([])을 사용하여 초기 배열을 빈 배열로 채웁니다.
이제 결과 배열에는 초기적으로 빈 배열이 num_list.length / n개 들어있게 됩니다.

.map(() => num_list.splice(0, n))는 초기에 생성한 빈 배열을 순회하면서,
각 빈 배열에 num_list에서 n개의 원소를 잘라서 추가하는 작업을 수행합니다.
splice(0, n)은 num_list의 처음부터 n개의 원소를 잘라내며,
이러한 작업이 각 빈 배열에 적용됩니다.
 */
