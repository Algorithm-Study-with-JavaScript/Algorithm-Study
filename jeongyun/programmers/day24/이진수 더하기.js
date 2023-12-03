const solution = (bin1, bin2) =>
  (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);

// 다른 사람 풀이
function solution(bin1, bin2) {
  let temp = Number(bin1) + Number(bin2);
  temp = [...temp.toString()].reverse().map((v) => +v); // 1의 자리수부터 덧셈을 해서 올림을 하면 계산이 편해지기 때문에 뒤집어줌

  for (let i = temp.length; i < 11; i++) {
    // *이진수 길이가 11자리 이상일 경우 처리하지 못함
    temp.push(0); // 배열의 길이를 11자리로 맞추기위해 빈 자리에 0 추가
  }

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === 2) {
      // 2진수로 바꿔야하기때문에 2인 경우 현재 자리 0, 다음 자리 1 더함
      temp[i] = 0;
      temp[i + 1]++;
    } else if (temp[i] === 3) {
      // 3인 경우 2진수로 해야하니까 현재자리를 1로하고 다음자리에 1 더함
      temp[i] = 1;
      temp[i + 1]++;
    }
  }
  return Number(temp.reverse().join("")).toString();
}
