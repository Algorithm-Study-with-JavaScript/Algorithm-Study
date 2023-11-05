// 내 풀이
function solution(s1, s2) {
  var answer = 0;
  s1.map((e) => {
    s2.map((k) => {
      if (e === k) answer++;
    });
  });
  return answer;
}

// 다른 사람 풀이
function solution(s1, s2) {
  const concat = [...s1, ...s2];
  const setConcat = Array.from(new Set(concat));

  return concat.length - setConcat.length;
}
