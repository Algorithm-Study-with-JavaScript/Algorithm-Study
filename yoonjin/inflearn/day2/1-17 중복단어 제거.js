function solution(arr) {
  let answer = Array.from(new Set(arr)); //set으로 중복제거 후 array from 으로 변환
  console.log(answer);
}

solution(['good', 'time', 'good', 'time', 'student']);
