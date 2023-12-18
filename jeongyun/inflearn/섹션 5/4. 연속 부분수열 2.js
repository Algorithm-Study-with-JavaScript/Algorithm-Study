/*
연속 부분수열 2
N개의 수로 이루어진 수열이 주어집니다.
이 수열에서 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지 구하는 프로그
램을 작성하세요.
만약 N=5, M=5이고 수열이 다음과 같다면
1 3 1 2 3
합이 5이하가 되는 연속부분수열은 {1}, {3}, {1}, {2}, {3}, {1, 3}, {3, 1}, {1, 2}, {2, 3},
{1, 3, 1}로 총 10가지입니다.

▣ 입력설명
첫째 줄에 N(1≤N≤100,000), M(1≤M≤100,000,000)이 주어진다.
수열의 원소값은 1,000을 넘지 않는 자연수이다.

▣ 출력설명
첫째 줄에 경우의 수를 출력한다.

▣ 입력예제 1
5 5
1 3 1 2 3

▣ 출력예제 1
10
*/
const mySolution = (m, arr) => {
  let count = 0; // 경우의 수
  let sum = 0; // 현재까지의 누적 합
  let start = 0; // 부분 수열의 시작 인덱스
  let end = 0; // 부분 수열의 끝 인덱스

  while (end <= arr.length) {
    if (sum <= m) {
      count += end - start; // 부분 수열의 시작부터 현재 위치까지 가능한 모든 부분 수열을 카운트
      if (end === arr.length) break;
      sum += arr[end++]; // 부분 수열의 끝을 옮기면서 누적 합에 값을 더함
    } else {
      sum -= arr[start++]; // 부분 수열의 시작을 옮기면서 누적 합에서 값을 뺌
    }
  }

  return count;
};

console.log(mySolution(5, [1, 3, 1, 2, 3]));

// 강의 풀이
function solution(m, arr) {
  let answer = 0,
    sum = 0,
    lt = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }
  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
