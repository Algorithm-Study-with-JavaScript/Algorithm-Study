// 내 풀이
function solution(hp) {
  const hpArr = [5, 3, 1];
  let sum = 0;
  hpArr.reduce((acc, el) => {
    const attack = Math.floor(acc / el);
    sum = sum + attack;
    return acc - attack * el;
  }, hp);
  return sum;
}
// 장군, 병정, 일개미의 공격력을 배열에 담음
// 해당 배열을 돌면서 필요한 개미의 수를 계산
// 남은 hp/각 공격력 계산을 통해서 필요한 개미의 수를 구함
// attack이 공격한 개미의 수로 sum에 더해줌
// 이전 hp값에 현재 공격한 개미의수*공격력 즉, 이번 개미가 소모한 hp를 빼서 나머지 hp를 다음으로 전해줌 -> 초기값은 전체 hp
// 마지막에는 공격한 개미의 수 총합 sum을 리턴함

// 다른 사람 풀이
function solution(hp) {
  return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
}
// 5의 공격력을 가지는 장군 개미의 수를 hp/5를 이용해서 구함 -> 나머지가 남는 경우 버림
// hp%5를 계산해서 장군 개미 공격 후 남는 hp 계산 이를 병정 개미의 공격력인 3으로 나눈 후 나머지는 버리며 공격에 필요한 최대 병정 개미의 수 구함
// 마지막으로 (hp % 5) % 3를 계산해서 장군, 병정 개미 공격 후 남는 hp 계산 -> 일개미의 경우 공격력이 1이므로 결과값이 필요한 일개미의 수
// 모두 더한 값을 리턴함
