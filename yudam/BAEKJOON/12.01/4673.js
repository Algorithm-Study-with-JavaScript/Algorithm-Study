function construct(number) {
  return (
    number +
    number
      .toString()
      .split("")
      .reduce((a, c) => a + +c, 0)
  );
}
const selfNumbers = [];

for (let i = 1; i <= 10000; i++) {
  const generatedNumber = construct(i);
  if (!selfNumbers.includes(generatedNumber)) {
    selfNumbers.push(generatedNumber);
  }
}

for (let i = 1; i <= 10000; i++) {
  if (!selfNumbers.includes(i)) {
    console.log(i);
  }
}