function solution(A, B) {
  const newArray = B.split("");

  console.log(newArray);

  let j = 0;
  while (j <= 50) {
    if (newArray.join("") === A) {
      return j;
    }
    const first = newArray[0];
    for (let i = 0; i < A.length; i++) {
      let temp = newArray[i + 1]; // e
      newArray[i] = temp; // 0번에 e
    }
    newArray[A.length - 1] = first;

    console.log(newArray);
    j++;
  }
  return -1;
}

let solution = (a, b) => (b + b).indexOf(a);
