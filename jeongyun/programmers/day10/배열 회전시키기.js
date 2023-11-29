const solution = (numbers, direction) => {
  const n = numbers.length;
  const result = Array(n);

  for (let i = 0; i < n; i++) {
    if (direction === "right") {
      // 오른쪽으로 회전
      result[(i + 1) % n] = numbers[i];
    } else if (direction === "left") {
      // 왼쪽으로 회전
      result[i] = numbers[(i + 1) % n];
    }
  }

  return result;
};

// 다른 사람 풀이
function solution(numbers, direction) {
  var answer = [];

  if ("right" == direction) {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }

  answer = numbers;

  return answer;
}
