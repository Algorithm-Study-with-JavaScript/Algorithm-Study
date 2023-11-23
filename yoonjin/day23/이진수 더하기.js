// 나의 풀이 : parseInt(문자열, 2)를 하면 문자열에서 이진수로 변환 가능, .toString(2)를 하면 10진수를 이진수 변환 가능
const solution = (bin1, bin2) => (parseInt(bin1, 2) +  parseInt(bin2, 2)).toString(2);

// 다른 사람 풀이: 
function solution(bin1, bin2) {
  let temp = Number(bin1) + Number(bin2); // 1. 우선 10진수화 해서 더한 후 temp에 저장
  temp = [...temp.toString()].reverse().map((v) => +v); // 2. reverse해서 저장 

  for (let i = temp.length; i < 11; i++) {
    temp.push(0);
  }

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === 2) {
      temp[i] = 0;
      temp[i + 1]++;
    } else if (temp[i] === 3) {
      temp[i] = 1;
      temp[i + 1]++;
    }
  }
  return Number(temp.reverse().join("")).toString();
}
