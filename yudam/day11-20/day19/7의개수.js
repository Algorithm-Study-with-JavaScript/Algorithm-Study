const solution = (array) => {
  const arrayCount = array.map((e) => {
    const elementArray = e.toString().split("");
    return elementArray.filter((e) => e === "7").length;
  });

  return arrayCount.reduce((a, e) => a + e, 0);
};
function solution(array) {
  return array.join("").split("7").length - 1;
}
