function d(n) {
  let sum = n;
  while (n > 0) {
    sum += n % 10; // 각 자리수를 더함
    n = Math.floor(n / 10);
  }
  return sum;
}

const selfNumbers = Array(10001).fill(true); // 10000보다 작거나 같은 수의 셀프 넘버를 저장할 배열

for (let i = 1; i <= 10000; i++) {
  const dn = d(i);
  if (dn <= 10000) {
    selfNumbers[dn] = false; // 생성자를 가진 수는 셀프 넘버 배열에서 제거
  }
}

// 셀프 넘버 출력
for (let i = 1; i <= 10000; i++) {
  if (selfNumbers[i]) {
    console.log(i);
  }
}
