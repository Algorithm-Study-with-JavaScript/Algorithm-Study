function solution(before, after) {
  const beforeArray = before.split("");
  after.split("").forEach((e) => {
    let index = beforeArray.indexOf(e);
    if (index === -1) {
      return 0;
    }
    beforeArray.splice(index, 1);
  });

  return beforeArray.length === 0 ? 1 : 0;
}

function solution(before, after) {
  return before.split("").sort().join("") === after.split("").sort().join("")
    ? 1
    : 0;
}
