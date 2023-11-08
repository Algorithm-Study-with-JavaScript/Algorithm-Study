function solution(spell, dic) {
  let count = 0;
  dic.forEach((e) => {
    if (JSON.stringify(e.split("").sort()) === JSON.stringify(spell.sort())) {
      count += 1;
    }
  });
  return count ? 1 : 2;
}
