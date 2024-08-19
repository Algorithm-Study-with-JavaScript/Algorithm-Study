function solution(cards1, cards2, goal) {
  let index1 = 0;
  let index2 = 0;

  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === cards1[index1]) {
      index1++;
    } else if (goal[i] === cards2[index2]) {
      index2++;
    } else {
      return "No";
    }
  }

  return "Yes";
}

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);
