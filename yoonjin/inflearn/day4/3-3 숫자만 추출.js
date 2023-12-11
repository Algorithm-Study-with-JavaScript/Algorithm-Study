function solution(str) {
  const re = /[0-9]/g;
  console.log(Number(str.match(re).join('')));
}
let str1 = 'g0en2T0s8eSoft';
let str2 = '0g00en2T0s8eSoft';
solution(str1);
solution(str2);
