// 내 풀이
function solution(num_list, n) {
  var answer = [];
  num_list.reduce((acc) => {
    const a = [...num_list].splice(acc, n);
    if (a.length > 0) answer.push(a);
    return acc + n;
  }, 0);
  return answer;
}
// reduce 메소드를 사용 -> 초기값으로 0을 넘겨주고 이전값에 n을 더한 후 다시 리턴
// splice 메소드를 사용 -> acc(직전 콜백함수가 리턴한 값)부터 n개 추출해서 할당 => num_list가 변화하지 않기 위해서 스프레드 연산자를 사용
// 할당된 값의 길이가 0보다 큰 경우에 answer에 푸시함
// 최종적으로 answer 리턴

// 다른 사람 풀이
function solution(num_list, n) {
  var answer = [];

  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }

  return answer;
}
// num_list의 길이를 반복문 조건으로 처리 -> 0, NaN은 false 이고 나머지는 true임 -> num_list의 길이가 0일때까지 반복됨
// splice 메소드를 사용해서 0부터 n개를 추출한 값을 answer 마지막에 추가함
// num_list는 0부터 n까지는 추출되고 나머지만 남음 -> 나머지를 가지고 다시 추출 -> 이를 반복함
// 최종적으로 answer를 반환함
