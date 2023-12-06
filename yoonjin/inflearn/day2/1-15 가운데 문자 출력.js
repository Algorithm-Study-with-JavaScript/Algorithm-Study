function solution(s) {
  s.length % 2 == 0
    ? console.log([...s].slice(s.length / 2 - 1, s.length / 2 + 1).join(''))
    : console.log([...s][Math.trunc(s.length / 2)]);
}

solution('study');
solution('good');
