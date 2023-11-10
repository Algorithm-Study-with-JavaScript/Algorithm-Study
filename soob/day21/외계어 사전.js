// 내 풀이
function solution(spell, dic) {
  const result = dic.map((e) => {
    return spell.map((k) => e.includes(k)).every((i) => i);
  });
  return result.some((e) => e) ? 1 : 2;
}

// 다른 사람 풀이
function solution(p, d) {
  return d.some((s) => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;
}
