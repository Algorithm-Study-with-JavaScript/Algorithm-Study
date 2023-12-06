function solution(str, chr) {
  console.log([...str].filter((x) => x === chr).length);
}

solution('COMPUTERPROGRAMMING', 'R');
