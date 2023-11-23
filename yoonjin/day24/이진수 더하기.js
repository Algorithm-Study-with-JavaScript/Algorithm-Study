// 나의 풀이 : parseInt(문자열, 2)를 하면 문자열에서 이진수로 변환 가능, .toString(2)를 하면 10진수를 이진수 변환 가능
const solution = (bin1, bin2) => (parseInt(bin1, 2) +  parseInt(bin2, 2)).toString(2);

// 다른 사람 풀이: 
function solution(bin1, bin2) {
  let temp = Number(bin1) + Number(bin2); 
  // 1. 우선 10진수화 해서 더한 후 temp에 저장 bin1 = 6 (110), bin2 = 7(111)이었다고 해보자.
  // temp = 221
  temp = [...temp.toString()].reverse().map((v) => +v); 
  // 2. JS는 왼> 오 로 반복문이 진행되지만 이진수 덧셈할 때는 뒤에서부터 더하므로 reverse해서 저장 [1,2,2]


  for (let i = temp.length; i < 11; i++) {
    temp.push(0); // 3. 이진수로 덧셈 시 반올림이 있을 수 있으므로 0 푸쉬, bin1과 bin2의 길이가 10이하이므로 11만큼 채워줌
    //1. [1,2,2,0,0,0,0,0,0,0,0,0,0]
  }
//4. 이진수 변환
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === 2) {
      temp[i] = 0;
      temp[i + 1]++;
      //1. [1,0,3,0,0,..]
    } else if (temp[i] === 3) {
      temp[i] = 1;
      temp[i + 1]++;
      //2. [1,0,1,1,0,0..]
    }
  }
  return Number(temp.reverse().join("")).toString();
  //5. 다시 뒤집어준다. 1101
}
