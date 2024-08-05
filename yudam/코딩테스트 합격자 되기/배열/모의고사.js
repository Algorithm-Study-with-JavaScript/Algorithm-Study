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

  // console.log(match(answers, way1));
  // console.log(match(answers, way2));
  // console.log(match(answers, way3));

  const object = {
    1: match(answers, way1),
    2: match(answers, way2),
    3: match(answers, way3),
  };

  // console.log(Object.entries(object));

  // console.log(Object.entries(object).sort((a, b) => b[1] - a[1]));
  const max = Math.max(...Object.values(object));

  // Object.keys(object).find((key) => object[key] === max);
  return Object.keys(object)
    .filter((key) => object[key] === max)
    .map((key) => +key);
}

// console.log(solution([1, 3, 2, 4, 2]));
