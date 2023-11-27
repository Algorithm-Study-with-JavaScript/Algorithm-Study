const solution = (num, total) => {
  let start = total / num - (num - 1) / 2; // 평균값에서 간격의 절반만큼 왼쪽으로 이동하여 첫 번째 숫자의 위치를 결정
  const result = [];
  for (let i = 0; i < num; i++) {
    result[i] = start;
    start++;
  }
  return result;
};

// 다른 사람 풀이
function solution(num, total) {
  var min = Math.ceil(total / num - Math.floor(num / 2)); //  시작값을 정하기 위해 중간 값만큼을 빼줌
  var max = Math.floor(total / num + Math.floor(num / 2));

  return new Array(max - min + 1).fill(0).map((el, i) => {
    return i + min;
  }); // 최소값과 최대값 사이의 숫자들을 포함하는 배열을 생성해서 map으로 i + min 부터 순차적으로 증가
}
