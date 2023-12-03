// 내 풀이
function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}
// includes 메소드 사용
// 인자로 전달된 문자열이 문자열 안에 존재하면 true, 존재하지 않으면 false 리턴

// 다른 사람 풀이
function solution(str1, str2) {
  return str1.split(str2).length > 1 ? 1 : 2;
}
//str2가 str1에 존재할경우 split 메소드를 사용하면 str2를 기준으로 잘린 후 배열이 반환됨
// 이때 존재하면 2개로 나뉨
// 이를 이용해서 해당 배열의 길이가 1보다 크면 존재하므로 1을 리턴 아니면 2를 리턴함
