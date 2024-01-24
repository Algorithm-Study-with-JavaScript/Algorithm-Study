function solution(arr) {
  let f = 0; //짝궁 키
  let fi = 0; //짝꿍 인덱스
  let m = 0; //현수 키
  let mi = 0; //현수 인덱스

  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] > arr[i + 1]) {
      //현재 인덱스 값보다 뒤 인덱스 값이 큰 경우(정렬에 맞지 않음)
      if (arr[i + 1] < m) {
        //그 중 뒤 인덱스 값이 현수보다 작은 경우 => 친구 값 찾음
        f = arr[i + 1];
        fi = i + 1;
      } else {
        //아닌 경우 현재 인덱스 값이 현수 키
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
  let sortArr = arr1.slice(); //배열 복사
  sortArr.sort((a, b) => a - b); //정렬
  for (let i = 0; i < arr.length; i++) {
    //정렬한 배열을 돌면서 arr[i]와 정렬된 arr[i] 다른 경우 answer에 추가
    if (arr[i] !== sortArr[i]) answer.push(i + 1);
  }

  return answer;
}

let arr1 = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution1(arr));
