// 내 풀이
function solution(n) {
  return [...n.toString()].reduce((acc, el) => {
    return (acc = acc + Number(el));
  }, 0);
}
// n이 숫자이므로 문자열로 변환 후 배열로 변환
// reduce 메소드를 사용해서 이전값에 계속 더함
// 이를 리턴함

// 다른 사람 풀이
function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}
// n을 문자열로 변환
// split 메소드 사용해서 배열로 변환
// reduce 메소드 사용함은 동일
