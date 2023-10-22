const solution = (price) =>
  price >= 500000
    ? Math.floor(price - price * 0.2)
    : price >= 300000
    ? Math.floor(price - price * 0.1)
    : price >= 100000
    ? Math.floor(price - price * 0.05)
    : price;

/* 다른 사람 풀이
const discounts = [
  [500000, 20],
  [300000, 10],
  [100000, 5],
];

const solution = (price) => {
  for (const discount of discounts) if (price >= discount[0]) return Math.floor(price - (price * discount[1]) / 100);
  return price;
};
*/
