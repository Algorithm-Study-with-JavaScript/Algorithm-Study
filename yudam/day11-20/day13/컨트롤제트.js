function solution(s) {
  const newArray = s.split(" ");
  return newArray.reduce((a, e, i, arr) => {
    if (e === "Z") {
      return a - arr[i - 1];
    } else {
      return a + Number(e);
    }
  }, 0);
}
