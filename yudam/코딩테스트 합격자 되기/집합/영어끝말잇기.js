/*
    몇 번째 사람이 몇 번째에 죽는지

    지는 사람 판단하는 요소 => 끝말잇기 룰에 어긋나지 않는지
    1. 철자가 이전 사람이 말한 단어의 끝자리로 시작하는지 
    2. 이전에 언급한 단어인지 -> 

    값을 리턴하는데에 필요한 요소
    1. 누가 탈락한건지 => 틀린 순간의 인덱스를 사람 수로 나눈 나머지
    2. 몇 번째 턴인지  => 틀린 순간의 인덱스를 사람 수로 나눈 몫
  
*/

function solution(n, words) {
  let incorrectIndex = -1;

  for (let i = 0; i < words.length; i++) {
    if (i === 0) continue;
    const before = words[i - 1];
    const current = words[i];

    if (words.indexOf(current) != i) {
      incorrectIndex = i + 1;
      break;
    }
    if (before[before.length - 1] !== current[0]) {
      incorrectIndex = i + 1;
      break;
    }
  }
  console.log(incorrectIndex);

  if (incorrectIndex == -1) {
    return [0, 0];
  }

  return [
    incorrectIndex % n === 0 ? n : incorrectIndex % n,
    Math.ceil(incorrectIndex / n),
  ];
}

// // 테스트 케이스 1
let n = 3;
let words = [
  "tank",
  "kick",
  "know",
  "tank",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
];
console.log(solution(n, words)); // Expected output: [3, 3]

// 테스트 케이스 2
n = 5;
words = [
  "hello",
  "observe",
  "effect",
  "take",
  "either",
  "recognize",
  "encourage",
  "ensure",
  "establish",
  "hang",
  "gather",
  "refer",
  "reference",
  "estimate",
  "executive",
];
console.log(solution(n, words)); // Expected output: [0, 0]

// 테스트 케이스 3
n = 2;
words = ["hello", "one", "even", "never", "now", "world", "draw"];
console.log(solution(n, words)); // Expected output: [1, 3]
