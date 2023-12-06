function solution(day, arr) {
  console.log(arr.filter((x) => x % 10 === day).length);
}
solution(3, [25, 23, 11, 47, 53, 17, 33]);
solution(0, [12, 20, 54, 30, 87, 91, 30]);
