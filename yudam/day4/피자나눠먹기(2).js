function solution(n) {
  let i = 1;
  let pizza = 1;
  while ((6 * i) % n) {
    i++;
    pizza++;
  }
  return pizza;

}

const solution = (n) => {
  let piece = 6

  while (true) {
    if (piece % n === 0) {
      break
    }
    piece += 6
  }

  return piece / 6
}