function solution(i, j, k) {
  let str = "";
  for (let z = i; z <= j; z++) {
    str += z.toString();
  }
  const reg = new RegExp(`${k}`, "g");

  return str.match(reg) ? str.match(reg).length : 0
}
