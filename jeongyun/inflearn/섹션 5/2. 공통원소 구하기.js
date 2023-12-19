/*
공통원소 구하기
A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로
그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 집합 A의 크기 N(1<=N<=30,000)이 주어집니다.
두 번째 줄에 N개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
세 번째 줄에 집합 B의 크기 M(1<=M<=30,000)이 주어집니다.
네 번째 줄에 M개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
각 집합의 원소는 1,000,000,000이하의 자연수입니다.

▣ 출력설명
두 집합의 공통원소를 오름차순 정렬하여 출력합니다.

▣ 입력예제 1
5
1 3 9 5 2
5
3 2 5 7 8

▣ 출력예제 1
2 3 5
*/
const mySolution = (arr1, arr2) => {
  let result = [];
  let pointer1 = 0;
  let pointer2 = 0;

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    console.log(arr1[pointer1], arr2[pointer2]);
    if (arr1[pointer1] == arr2[pointer2]) {
      result.push(arr1[pointer1]);

      pointer1++;
      pointer2++;
    } else if (arr1[pointer1] < arr2[pointer2]) pointer1++;
    else pointer2++;
  }
  return result;
};

console.log(mySolution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));

// 강의 풀이
function solution(arr1, arr2) {
  let answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let p1 = (p2 = 0);
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] == arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
    } else if (arr1[p1] < arr2[p2]) p1++;
    else p2++;
  }
  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
