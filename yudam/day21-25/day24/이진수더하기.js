function solution(bin1, bin2) {
  const num = Number.parseInt(bin1, 2) + Number.parseInt(bin2, 2)
  console.log(num)
  return num.toString(2);
}