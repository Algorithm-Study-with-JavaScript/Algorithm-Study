function solution(numbers) {
  return numbers.reduce((accum, element) => [...accum, element * 2], []);
}


const solution = (numbers) => numbers.map((number) => number * 2)