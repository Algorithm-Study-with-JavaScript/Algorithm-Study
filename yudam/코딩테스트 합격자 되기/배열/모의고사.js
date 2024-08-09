/*
1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
12345 => 반복 5개 

2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
21/23/24/25 => 반복 2*4 = 8개

3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
33/11/22/44/55 =>  반복 2*5 = 10개 

가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return => 오름차순으로  

*/

function match(answers, wayArr) {
  return answers.reduce((acc, answer, index) => {
    if (answer === wayArr[index % wayArr.length]) {
      return acc + 1;
    }
    return acc;
  }, 0);
}

function solution(answers) {
  let way1 = [1, 2, 3, 4, 5];
  let way2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let way3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const object = {
    1: match(answers, way1),
    2: match(answers, way2),
    3: match(answers, way3),
  };

  const max = Math.max(...Object.values(object));

  // Object.keys(object).find((key) => object[key] === max);
  return Object.keys(object)
    .filter((key) => object[key] === max)
    .map((key) => +key);
}

function solution2(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const score = [0, 0, 0];

  console.log(answers.entries());

  // ➌ 각 수포자의 패턴과 정답이 얼마나 일치하는지 확인
  for (const [i, answer] of answers.entries()) {
    for (const [j, pattern] of patterns.entries()) {
      if (answer === pattern[i % pattern.length]) {
        scores[j] += 1;
      }
    }
  }
}

solution2([1, 2, 3, 4, 5]);
