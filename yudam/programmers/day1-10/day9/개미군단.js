function solution(hp) {
  let count = 0;
  let arr = [5, 3, 1];
  let news = 0;

  arr.forEach((i) => {
    news = Math.trunc(hp / i);
    count += news;
    hp -= i * news;
  });

  return count;
}

function solution(hp) {
  return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
}
