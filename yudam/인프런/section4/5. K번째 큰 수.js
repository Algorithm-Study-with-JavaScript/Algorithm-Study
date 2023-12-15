function solution(n, k, card) {
  card.sort((a, b) => b - a);
  console.log(card);
  let temp = new Set();

  for (let i = 0; i < card.length; i++) {
    for (let j = i + 1; j < card.length; j++) {
      for (let k = j + 1; k < card.length; k++) {
        temp.add(card[i] + card[j] + card[k]);
      }
    }
  }
  const newArray = [...temp].sort((a, b) => b - a);
  return newArray[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
