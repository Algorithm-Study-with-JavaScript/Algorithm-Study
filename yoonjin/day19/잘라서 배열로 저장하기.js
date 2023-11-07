// 다른 사람 풀이 (1) forans과 slice 사용
function solution(my_str, n) {
    let res = [];
    for (let i = 0; i < my_str.length; i+=n) res.push(my_str.slice(i, i+n));
  //마지막에 범위를 넘기면 어쩌지? 했는데 slice에선 마지막 인덱스가 범위를 초과하면 그냥 마지막 인덱스까지 넣어줌
    return res;
}

// 다른 사람 풀이 (2) match와 정규 표현식 사용하여 정규표현식에 해당하는 항목을 배열로 반환 
// . => 모든 문자열을 포함하는 문자열(숫자, 한글, 영어, 특수기호, 공백 모두), 1=> 마지막에 하나의 요소만 남는 경우 고려, g=> 전역 탐색, 모든 경우 검색
//{Min, Max}
//최소 Min개 이상, 최대 Max개 이하{3,5}? == {3}와 동일
function solution(my_str, n) {
  return my_str.match(new RegExp(`.{1,${n}}`, "g"));
}
