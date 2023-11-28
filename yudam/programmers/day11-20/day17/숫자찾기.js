function solution(num, k) {
  const index = num.toString().indexOf(k);
  return index === -1 ? index : index + 1;
}

function solution(num, k) {
  return (
    num
      .toString()
      .split("")
      .map((el) => Number(el))
      .indexOf(k) + 1 || -1
  );
}


