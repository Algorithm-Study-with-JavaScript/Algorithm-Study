// 내 풀이
function solution(numbers, direction) {
  const num = numbers.length - 1;
  const newArr = [...numbers].splice(`${direction === "right" ? 0 : 1}`, num);
  direction === "right"
    ? newArr.unshift(numbers[num])
    : newArr.push(numbers[0]);
  return newArr;
}
// 만약 방향이 오른쪽이라면 0번 인덱스부터 +1인덱스가 되고 마지막 인덱스의 수는 0번 인덱스 자리로 옮기게 됨
// 방향이 왼쪽이라면 0번 인덱스가 마지막 인덱스로 자리를 옮기게 되고 마지막 인덱스의 수부터 1번 인덱스의 수가 -1 인덱스가 됨
// 우선 배열을 복사해서 방향이 오른쪽이면 0번 인덱스부터 옮겨야 하는 수 한개를 뺀 나머지 수만큼 추출
// 그리고 마지막 인덱스에 해당하는 수를 새롭게 추출한 배열에 앞에 추가
// 왼쪽이라면 1번 인덱스부터 옮겨야 하는 수 한개를 뺀 나머지 수만큼 추출
// 그리고 첫번째 인덱스에 해당하는 수를 맨 뒤에 추가
// 이를 리턴함

// 다른 사람 풀이
function solution(numbers, direction) {
  var answer = [];

  if ("right" == direction) {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }

  answer = numbers;

  return answer;
}
// 방향이 오른쪽인 경우 pop 메소드를 이용해서 마지막 요소를 제거 후  제거된 값이 반환되고 이를 unshift 메소드를 통해서 앞에 추가
// 오른쪽이 아닌 경우 shift 메소드를 이용해서 첫번째 요소를 제거 후 제거된 값이 반환되고 이를 push 메소드를 통해서 배열의 마지막에 추가
// answer에 numbers를 재할당 후 answer 리턴
