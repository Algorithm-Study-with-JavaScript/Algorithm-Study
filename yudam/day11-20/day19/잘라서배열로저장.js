function solution(my_str, n) {
  let array = [];
  for (let i = 0; i < my_str.length; i += n) {
    array.push(my_str.slice(i, n + i));
  }
  return array;
}
function solution(my_str, n) {
  //   .: 임의의 문자 하나를 나타냅니다.
  // {1,${n}}: 중괄호 안에 숫자 범위가 있으며, 여기서는 1과 ${n}로 설정되어 있습니다. 이것은 문자 하나가 최소 1번부터 ${n}번 반복됨을 의미합니다.

  return my_str.match(new RegExp(`.{1,${n}}`, "g"));
}
