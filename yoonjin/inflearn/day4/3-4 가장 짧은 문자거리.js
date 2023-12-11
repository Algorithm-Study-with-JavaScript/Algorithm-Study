function solution(str, find) {
  let arr = [];
  let res = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === find) {
      arr.push(i);
    }
  } //찾는 문자의 모든 인덱스 저장
  for (let i = 0; i < str.length; i++) {
    let min = 99999;
    for (let index of arr) {
      min = Math.min(Math.abs(index - i), min);
    }
    res.push(min);
  }
  console.log(res);
}

let str1 = 'teachermode';
let find1 = 'e';

solution(str1, find1);
