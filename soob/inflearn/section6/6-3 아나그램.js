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
