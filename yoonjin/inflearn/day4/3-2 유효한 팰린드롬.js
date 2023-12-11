function solution(letter) {
  let str = letter.toLowerCase().replaceAll(' ', '');
  console.log(str);
  console.log([...str].reverse().join(''));
  [...str].reverse().join('').localeCompare(str) //등치비교로 안돼서 Localcompare 사용
    ? console.log('YES')
    : console.log('NO');
}
let str1 = 'found7, time: study; Yduts; emit, 7Dnuof';
solution(str1);
