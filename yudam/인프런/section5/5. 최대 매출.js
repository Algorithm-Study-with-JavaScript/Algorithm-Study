// 슬라이딩 윈도우 방식
function solution(k, arr) {
  let answer = (sum = 0);
  // 처음 12 15 11
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;
  // 앞에꺼 더 빼고 뒤에꺼 더하기
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}

function solution2(k, arr) {
  let p1 = 0; // k번 더해가는 과정을 따라가는 포인터
  let p2 = 0; // 시작점
  let count = 0; // k만큼 더하기 위한 카운터
  let answer = 0;
  let sum = 0; // 합 저장
  
  while (p2 < arr.length - k + 1) {
    sum += arr[p1++];
    console.log(sum);
    count++;
    if (count === k) {
      if (sum > answer) {
        answer = sum;
        console.log("answer", answer);
      }
      sum = 0;
      p2++;
      p1 = p2;
      count = 0;
    }
  }
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution2(3, a));
