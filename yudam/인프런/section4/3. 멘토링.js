function solution(test) {
  const testCount = test.length; //m
  const personCount = test[0].length; //n

  for (let i = 1; i <= personCount; i++) {
    for (let j = 1; j <= personCount; j++) {
      let count = 0;
      for (let k = 0; k < testCount; k++) {
        let iPosition = Number.MAX_SAFE_INTEGER;
        let jPosition = Number.MIN_SAFE_INTEGER;
        for (let s = 0; s < personCount; s++) {
          if (arr[k][s] === i) {
            iPosition = s;
            //console.log("iPosition", iPosition);
          }
          if (arr[k][s] === j) {
            jPosition = s;
            //console.log("jPosition", jPosition);
          }
        }
        if (iPosition < jPosition) {
          count++;
        }
      }
      if (count === testCount) {
        console.log(i, j);
      }
    }
  }
  return count;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
