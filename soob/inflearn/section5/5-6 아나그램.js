function solution(str1, str2) {
  let str1M = new Map();
  let str2M = new Map();

  [...str1].map((e) => {
    const i = str1M.get(e) + 1 || 1;
    str1M.set(e, i);
  });

  [...str2].map((e) => {
    const i = str2M.get(e) + 1 || 1;
    str2M.set(e, i);
  });

  for (let key of str1M.keys()) {
    if (!str2M.has(key)) {
      return "NO";
    }
    if (str1M.get(key) !== str2M.get(key)) {
      return "NO";
    }
  }

  return "YES";
}

// let a = "AbaAeCe";
// let b = "baeeACA";
let a = "abaCC";
let b = "Caaab";
console.log(solution(a, b));

// 강의
function solution1(str1, str2) {
  let answer = "YES";
  let sH = new Map();
  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }

  for (let x of str2) {
    // sH에 x가 없는 경우 || 상쇄하고 보니 더 이상 상쇄할 수 없는 경우
    if (!sH.has(x) || sH.get(x) === 0) return "NO";
    sH.set(x, sH.get(x) - 1);
  }

  return answer;
}

console.log(solution1(a, b));
