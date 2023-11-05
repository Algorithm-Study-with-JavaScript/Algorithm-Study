// 내 풀이
function solution(my_string) {
  return [...my_string]
    .map((e) => {
      return e.toLowerCase();
    })
    .sort()
    .join("");
}
// 스프레드 연산자로 배열로 변환
// map 메소드를 통해서 소문자로 변환
// 이를 정렬후 join 메소드를 사용해 문자열로 반환

// 다른 사람 풀이
function solution(s) {
  return [...s.toLowerCase()].sort().join("");
}
// s.toLowerCase() => 각 문자를 소문자로 반환해서 배열로 만듦
