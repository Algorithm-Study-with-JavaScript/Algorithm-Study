function solution(n) {
  let x = 0; // 3의 배수와 3을 제외한 수를 세는 변수
  let i = 1; // 3x 마을에서 사용하는 숫자

  while (true) {
    if (i % 3 !== 0 && !i.toString().includes("3")) {
      x++; // 3의 배수나 3을 포함하지 않는 경우에만 증가시킴
      console.log(x) 
    }
    

    if (x === n) {
      return i;
    }

    i++;
  }
}
