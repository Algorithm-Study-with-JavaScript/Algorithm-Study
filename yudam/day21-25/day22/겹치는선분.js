function solution(lines) {
  lines.sort((a, b) => a[0] - b[0]);

  console.log(lines);

  const newArray = [];
  lines.forEach((e, i) => {
    const [num1, num2] = e;
    for (let j = i + 1; j < lines.length; j++) {
      const [num3, num4] = lines[j];
      if (num1 <= num3 && num2 >= num3 && num2 !== num3) {
        newArray.push([num3, Math.min(num2, num4)]);
      }
    }
  });

  console.log(newArray);

  if (newArray.length === 0) {
    return 0;
  }
 

  const xy = [newArray.map((e) => e[0]), newArray.map((e) => e[1])];

  return Math.max(...xy[1]) - Math.min(...xy[0]);
}
