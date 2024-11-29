// function countDots(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ".") {
//       count++;
//     } else {
//       break; // '.'이 아닌 문자가 나오면 종료
//     }
//   }
//   return count;
// }
// function solution(codes) {
//   const currentBlockNumber = countDots(codes[0]);
//   console.log(currentBlockNumber);

//   // console.log(
//   //   codes.forEach((element) => {
//   //     console.log(countDots(element));
//   //   })
//   // );

//   codes.forEach((element) => {
//     if (element.includes("print")) {
//       console.log(element);
//     } else {
//       const block = countDots(element);
//     }
//   });
// }

// 문자열에서 점 개수 세기
function countDots(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ".") {
      count++;
    } else {
      break;
    }
  }
  return count;
}
function solution(code) {
  let answer = [];
  let scopes = [{ variables: {} }]; // 첫 번째 스코프는 전역 스코프

  for (let line of code) {
    let dotCount = countDots(line); // 현재 명령의 블록 깊이
    let command = line.slice(dotCount).trim(); // 실제 명령어 부분

    // 스코프 정리: 현재 블록 깊이보다 더 깊은 스코프 제거
    scopes = scopes.slice(0, dotCount + 1); // 해당 깊이보다 깊은 스코프는 삭제

    // 현재 깊이에 해당하는 스코프가 없으면 추가
    if (scopes.length <= dotCount) {
      scopes.push({ variables: {} });
    }

    if (command.startsWith("print ")) {
      // 출력 명령어 처리
      let varName = command.split(" ")[1]; // 출력할 변수명
      let found = false;

      // 가장 최근 스코프부터 변수를 찾아서 출력
      for (let i = scopes.length - 1; i >= 0; i--) {
        if (varName in scopes[i].variables) {
          answer.push(`${varName}=${scopes[i].variables[varName]}`);
          found = true;
          break;
        }
      }

      if (!found) {
        answer.push("error");
      }
    } else {
      // 변수 선언 처리 (예: a=3)
      let [varName, value] = command.split("=");
      value = parseInt(value, 10);

      // 현재 스코프에 변수 저장
      scopes[scopes.length - 1].variables[varName] = value;
    }
  }

  return answer;
}
console.log(
  solution([
    "a=3",
    "..a=4",
    "..b=3",
    "..print a",
    ".......a=6",
    ".......print a",
    ".......print b",
    "..print a",
    "....a=7",
    "...print a",
    "print a",
    "print b",
    "a=4",
    "print a",
    "...print a",
  ])
);
