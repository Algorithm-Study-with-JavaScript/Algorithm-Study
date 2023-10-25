function solution(emergency) {
  let newArray = [...emergency];
  for (let i = 1; i <= emergency.length; i++) {
    const max = Math.max(...emergency);
    const maxIndex = emergency.indexOf(max);
    emergency.splice(maxIndex, 1, 0);
    newArray.splice(maxIndex, 1, i);
  }

  return newArray;
}

function solution(emergency) {
  let sorted = emergency.slice().sort((a, b) => b - a);
  return emergency.map((v) => sorted.indexOf(v) + 1);
}
