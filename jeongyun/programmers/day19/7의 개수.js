const solution = (array) => array.join("").split("7").length - 1;

// 다른 사람 풀이
function solution(array) {
  let result = 0;

  array.map((item) => {
    while (item > 0) {
      if (item % 10 === 7) {
        result += 1;
      }

      item = Math.floor(item / 10);
    }
  });

  return result;
}
