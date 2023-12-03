const d = (n) => {
  return n + [...String(n)].reduce((acc, value) => acc + +value, 0);
};

const getSelfNumbers = (limit) => {
  const selfNumbers = [];
  const result = [];

  for (let i = 1; i <= limit; i++) {
    selfNumbers.push(d(i));
  }

  for (let i = 1; i <= limit; i++) {
    if (!selfNumbers.includes(i)) {
      result.push(i);
    }
  }

  return result;
};

const selfNumbers = getSelfNumbers(10000);
selfNumbers.forEach((number) => {
  console.log(number);
});
