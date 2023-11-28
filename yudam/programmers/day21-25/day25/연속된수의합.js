function solution(num, total) {
  const newArray = Array.from({ length: num }, (_, i) => i);
  const sum = newArray.reduce((a, e) => a + e, 0);

  const x = (total - sum) / newArray.length;

  return Array.from({ length: num }, (_, i) => x + i);
}

function solution(num, total) {
  var min = Math.ceil(total / num - Math.floor(num / 2));
  var max = Math.floor(total / num + Math.floor(num / 2));

  return new Array(max - min + 1).fill(0).map((el, i) => {
    return i + min;
  });
}
