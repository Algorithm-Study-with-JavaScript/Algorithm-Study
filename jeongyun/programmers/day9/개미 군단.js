const solution = (hp) => {
  let antsNeeded = 0;

  antsNeeded += Math.trunc(hp / 5);
  hp %= 5;

  antsNeeded += Math.trunc(hp / 3);
  hp %= 3;

  antsNeeded += hp;

  return antsNeeded;
};

// 다른 사람 풀이
function solution(hp) {
  return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
}

// (hp%5)%3 일개미는 어차피 공격력이 1이기 때문에 장군개미, 병정개미의 나머지만 구하면 됨
