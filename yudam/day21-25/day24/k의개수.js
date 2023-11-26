function solution(i, j, k) {
  let str = "";
  for (let z = i; z <= j; z++) {
    str += z.toString();
  }
  const reg = new RegExp(`${k}`, "g");

  return str.match(reg) ? str.match(reg).length : 0;
}

function solution(i, j, k) {
  let a = "";
  for (i; i <= j; i++) {
    a += i;
  }

  return a.split(k).length - 1;
}

// let a = "111"
// a.split("1")