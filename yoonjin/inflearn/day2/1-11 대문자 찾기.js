function solution(str) {
  console.log([...str].filter((x) => x === x.toUpperCase()).length);
}

solution('KoreaTimeGood');
