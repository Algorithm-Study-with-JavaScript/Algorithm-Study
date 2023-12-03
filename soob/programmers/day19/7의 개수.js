// 내 풀이
function solution(array) {
  var answer = 0;
  array.map((e) => {
    const str = e.toString();
    if (str.includes(7)) {
      answer = [...str].reduce((acc, el) => {
        if (el === "7") {
          return (acc = acc + 1);
        }
        return acc;
      }, answer);
    }
  });
  return answer;
}
// map 메소드를 통해서 반복
// 각 요소를 문자로 바꾼 후 해당 문자열에 7이 있는지 includes로 검사
// 만약 존재하면 문자열을 배열로 바꾼 후 reduce 메소드로 7이 몇개있는지 확인 후 answer값 추가
// 마지막에 answer 리턴

// 다른 사람 풀이
function solution(array) {
  return array.join("").split("7").length - 1;
}
