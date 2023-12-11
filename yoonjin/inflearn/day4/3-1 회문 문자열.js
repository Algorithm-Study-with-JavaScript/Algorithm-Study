function solution(letter) {
  let str = letter.toLowerCase();
  [...str].reverse().join('') === str ? console.log('YES') : console.log('NO');
}
let str1 = 'gooG';
let str2 = 'kooG';
solution(str1);
solution(str2);
