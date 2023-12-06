function solution(...args) {
  let arr = args.filter((x) => x % 2 !== 0);
  console.log(arr.reduce((a, c) => a + c, 0));
  console.log(Math.min(...arr));
}

solution(12, 77, 38, 41, 53, 92, 85);
