function solution(s) {
  const newArray = s.split("");

  const map = new Map();
  newArray.forEach((e) => {
    if (!map.has(e)) {
      map.set(e, 1);
    } else {
      map.set(e, map.get(e) + 1);
    }
  });

  let max = 0;
  let maxKey;
  for (let [key, value] of map) {
    if (max < value) {
      max = value;
      maxKey = key;
    }
  }
  return maxKey;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
