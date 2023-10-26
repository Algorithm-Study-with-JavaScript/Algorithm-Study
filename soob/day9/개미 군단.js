// 내 풀이
function solution(hp) {
  const hpArr = [5, 3, 1];
  let sum = 0;
  hpArr.reduce((acc, el, i) => {
    const attack = i === 2 ? Math.ceil(acc / el) : Math.floor(acc / el);
    sum = sum + attack;
    return acc - attack * el;
  }, hp);
  return sum;
}
// 장군, 병정, 일개미의 공격력을 배열에 담음
// 해당 배열을 돌면서 필요한 개미의 수를 계산
// 장군, 병정 개미의 경우 나머지가 생길 경우 버림, 일개미의 경우 올림을 해줌 -> 이를 인덱스로 구별해줌
// (장군, 병정 개미의 경우 다음 개미가 공격 가능하지만 일개미의 경우 나머지 hp없이 모두 소진해야하기 때문)
// attack이 공격한 개미의 수로 sum에 더해줌
// 이전 hp값에 현재 공격한 개미의수*공격력 즉, 이번 개미가 소모한 hp를 빼서 나머지 hp를 다음으로 전해줌 -> 초기값은 전체 hp
// 마지막에는 공격한 개미의 수 총합 sum을 리턴함

// 다른 사람 풀이
function solution(hp) {
  return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
}
