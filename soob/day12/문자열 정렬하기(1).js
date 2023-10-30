// 내 풀이
function solution(my_string) {
  var arr = [...my_string].filter((e) => Number(e) || e === "0");
  return arr.map(Number).sort();
}

// 다른 사람 풀이
function solution(my_string) {
  return my_string
    .match(/\d/g)
    .sort((a, b) => a - b)
    .map((n) => Number(n));
}
// 정규표현식에 -> g: 문자열 내의 모든 패턴을 검색함, \d: 숫자
// mathch -> 문자열에서 정규표현식에 매칭되는 항목들을 배열로 반환함
// => 문자열 내의 모든 숫자를 검색해 매칭되는 항목 배열로 반환
// 이후 정렬하고 다시 map으로 돌면서 숫자로 변환
