// A,B 두 사람이 가위바위보 게임을 합니다.
// 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다.
// 비길 경우에는 D를 출력합니다.
// 가위, 바위, 보의 정보는 1:가위, 2: 바위, 3:보로 정하겠습니다.
// 두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램을 작성하세요.

// 입력 설명
// 첫 번째 줄에 게임 횟수인 자연수 N(1<=N<=100)이 주어집니다.
// 두 번째 줄에는 A가 낸 가위, 바위, 보 정보가 N개가 주어집니다.
// 세 번째 줄에는 B가 낸 가위, 바위, 보 정보가 N개 주어집니다.

// 출력 설명
// 각 줄에 각 회의 승자를 출력합니다. 비겼을 경우는 D를 출력합니다.

function solution(a, b) {
  return a.reduce((acc, el, index) => {
    let a = acc;
    const { x, y } = el > b[index] ? { x: "B", y: "A" } : { x: "A", y: "B" };

    if (el === b[index]) {
      a.push("D");
      return a;
    }

    if (Math.abs(el - b[index]) === 2) {
      a.push(x);
      return a;
    }

    a.push(y);
    return a;
  }, []);
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));

// 강의
function solution1(a, b) {
  let answer = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) answer += "D" + " ";
    else if (a[i] === 1 && b[i] === 3) answer += "A" + " ";
    else if (a[i] === 2 && b[i] === 1) answer += "A" + " ";
    else if (a[i] === 3 && b[i] === 2) answer += "A" + " ";
    else answer += "B" + " ";
  }
  return answer;
}

console.log(solution1(a, b));
