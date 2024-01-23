function solution(arr) {
  let f = 0;
  let fi = 0;
  let m = 0;
  let mi = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] > arr[i + 1]) {
      if (arr[i + 1] < m) {
        f = arr[i + 1];
        fi = i + 1;
      } else {
        m = arr[i];
        mi = i;
      }
    }
  }
  return `${mi + 1} ${fi + 1} 키 정보 ${m}가 현수이고, ${f}이 현수 짝궁입니다.`;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));

//강의 풀이
function solution1(arr1) {
  let answer = [];
  let sortArr = arr1.slice();
  sortArr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortArr[i]) answer.push(i + 1);
  }

  return answer;
}

let arr1 = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution1(arr));
