// 내 풀이
function solution(num, k) {
  const index = [...num.toString()].indexOf(k.toString());
  return index === -1 ? -1 : index + 1;
}
// 숫자 num을 문자열로 변환 후 배열로 반환
// 이 배열에서 indexOf 사용해서 k가 있는지 확인
// 만약에 없다면 -1이 리턴되므로 이 경우 -1 존재한다면 index에 +1하여 리턴

// 다른 사람 풀이
function solution(num, k) {
  return (
    num
      .toString()
      .split("")
      .map((el) => Number(el))
      .indexOf(k) + 1 || -1
  );
}
// map을 사용함
// indexOf()로 반환된 값에 +1을 하여 리턴
// 이떼 존재하지 않아서 -1이 리턴된 경우 +1을 하면 0이 되므로 false => || 연산자의 오른쪽 값이 리턴됨
