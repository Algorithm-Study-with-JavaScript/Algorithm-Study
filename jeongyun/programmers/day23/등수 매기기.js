const solution = (score) => {
  const averageScores = score.map((item) => (item[0] + item[1]) / 2);

  return averageScores.map(
    (v) => [...averageScores].sort((a, b) => b - a).indexOf(v) + 1
  );
};

// 다른 사람 풀이
function solution(score) {
  return score.map((el) => {
    return (
      score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1 // 평균 점수가 더 높은 점수만 필터링
    );
  });
}
