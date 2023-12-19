/*
연속 부분수열 1
N개의 수로 이루어진 수열이 주어집니다.
이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을
작성하세요.
만약 N=8, M=6이고 수열이 다음과 같다면
1 2 1 3 1 1 1 2
합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지입니다.

▣ 입력설명
첫째 줄에 N(1≤N≤100,000), M(1≤M≤100,000,000)이 주어진다.
수열의 원소값은 1,000을 넘지 않는 자연수이다.

▣ 출력설명
첫째 줄에 경우의 수를 출력한다.

▣ 입력예제 1
8 6
1 2 1 3 1 1 1 2

▣ 출력예제 1
3
*/
const mySolution = (m, arr) => {
  let count = 0; // 경우의 수
  let sum = 0; // 현재까지의 누적 합
  let start = 0; // 부분 수열의 시작 인덱스
  let end = 0; // 부분 수열의 끝 인덱스

  while (end <= arr.length) {
    if (sum >= m) {
      if (sum === m) {
        count++; // 누적 합이 타겟 숫자와 같으면 경우의 수 증가
      }
      sum -= arr[start++]; // 부분 수열의 시작을 옮기면서 누적 합에서 값을 뺌
    } else {
      if (end === arr.length) break;
      sum += arr[end++]; // 부분 수열의 끝을 옮기면서 누적 합에 값을 더함
    }
  }

  return count;
};

console.log(mySolution(6, [1, 2, 1, 3, 1, 1, 1, 2]));

// 강의 풀이
function solution(m, arr) {
  let answer = 0,
    lt = 0,
    sum = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
