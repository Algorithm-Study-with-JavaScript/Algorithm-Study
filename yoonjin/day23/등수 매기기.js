// 나의 풀이
// base: 평균 대신 합을 구해서 저장 (어차피 평균으로 정렬하나 합으로 정렬하나니까)
// sorted: 위의 배열을 내림차순으로 정렬
// base에 sorted의 순위를 대입해줌
function solution(score) {
    let base =  score.map((x)=>x.reduce((a,c)=>a+c,0));
    let sorted = [...base].sort((a,b)=>b-a);
    return base.map((x)=>sorted.indexOf(x)+1)
}

// 다른 사람 풀이: map으로 각각 요소에 대해서 filter로 전체 순회, 내 등수 = 자기보다 점수가 높은 사람 수 + 1 
function solution(score) {
  return score.map((el) => {
    return (
      score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
    );
  });
}
