function solution(letter) {
  let str = letter.toLowerCase().replaceAll(/[`,:;`]/g, '');
  [...str].reverse().join('') == str ? console.log('YES') : console.log('NO');
}
let str1 = 'found7, time: study; Yduts; emit, 7Dnuof';
solution(str1);
