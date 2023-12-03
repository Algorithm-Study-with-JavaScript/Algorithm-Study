function solution(sides) {
  const [num1, num2] = sides;
  const num3 = num1 + num2;
  const max = Math.max(num1, num2);
  let count = 0;
  for (let i = num3 - 1; i > max; i--) {
    console.log(i);
    count++;
  }

  for (let i = max; i > 0; i--) {
    if (max < i + Math.min(num1, num2)) {
      count++;
    }
  }
  return count;
}
