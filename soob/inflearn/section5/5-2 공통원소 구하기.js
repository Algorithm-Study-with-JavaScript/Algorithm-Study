function solution(arr1, arr2) {
  let answer = [];
  arr1.map((e) => {
    arr2.map((k) => {
      if (e === k) return answer.push(k);
    });
  });
  return answer.sort((a, b) => a - b);
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));

// 겅의
function solution1(arr1, arr2) {
  let answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let p1 = (p2 = 0);
  // 포인터값이 작은쪽을 ++하면서 배열을 모두 검색
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] == arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
    } else if (arr1[p1] < arr2[p2]) p1++;
    else p2++;
  }
  return answer;
}

console.log(solution1(a, b));
