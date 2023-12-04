function solution(a, b, c) {
  2 * Math.max(a, b, c) > a + b + c ? console.log('NO') : console.log('YES');
}

solution(6, 7, 11);
solution(13, 33, 17);
