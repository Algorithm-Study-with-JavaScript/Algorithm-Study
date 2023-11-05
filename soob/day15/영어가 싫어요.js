// 내 풀이
const obj = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function solution(numbers) {
  const newArr = Object.keys(obj)
    .reduce((acc, el) => {
      return acc.split(el).join(` ${el} `);
    }, numbers)
    .trim()
    .split("  ");

  return Number(
    newArr.reduce((acc, el) => {
      return (acc = acc + obj[Object.keys(obj).find((key) => key === el)]);
    }, "")
  );
}
// 영어를 key로 숫자를 value로 하는 obj 선언
// obj의 key만을 묶어서 배열로 반환하는 Object.keys()메소드 사용
// reduce 메소드를 활용
// -> 초기값을 numbers로 하고 이전값을 el(obj key값)을 기준으로 자른 후 다시 join 메소드를 활용해 공백 el 공백으로 문자열로 만들어 반환
// 이를 반복하면 초기 문자열에 각 단어마다 공백이 발생함
// 맨 앞과 뒤에 공백이 추가되어 있으므로 trim 메소드(양끝 공백 제거)를 사용해 제거해줌
// 이를 다시 '  ' 기준으로 잘라 배열로 반환함 -> trim이 없다면 반환된 배열의 0, 마지막 인덱스에 공백이 존재함
// newArr 는 ['one', 'two'] => 단어 기준으로 잘려진 배열
// 이를 숫자로 바꾸기 위해 reduce 메소드를 활용해 초기값에 해당하는 숫자를 더해주는 방식으로 처리
// obj의 key만을 가져온 배열에서 find 메소드를 사용해 현재값과 key값이 동일한 key를 찾음
// 이를 obj[key]를 통해서 key에 해당하는 value를 찾고 이전값(acc)에 더해서 반환 -> 이를 반복
// 결곽값은 문자열이지만 숫자타입을 요구했으므로 Number로 숫자 반환

// 다른 사람 풀이
function solution(numbers) {
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const num = numbers.replace(
    /zero|one|two|three|four|five|six|seven|eight|nine/g,
    (v) => {
      return obj[v];
    }
  );

  return Number(num);
}
