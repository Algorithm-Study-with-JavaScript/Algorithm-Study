function solution(participant, completion) {
  const object = {};

  for (let element of participant) {
    if (object[element] > 0) {
      object[element]++;
    } else {
      object[element] = 1;
    }
  }

  for (let element of completion) {
    if (object[element] > 0) {
      object[element]--;
    }
  }

  for (let element in object) {
    if (object[element] > 0) {
      return element;
    }
  }
}

console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
