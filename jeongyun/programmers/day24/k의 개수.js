const solution = (i, j, k) => {
  let count = 0;

  for (i; i <= j; i++) {
    const num = i.toString();

    for (let idx = 0; idx < num.length; idx++) {
      if (num[idx] === k.toString()) {
        count++;
      }
    }
  }

  return count;
};

// 다른 사람 풀이
function solution(i, j, k) {
  let a = "";
  for (i; i <= j; i++) {
    a += i;
  }

  return a.split(k).length - 1; // k가 9라고 가정하면 '191'인 경우 9로 분리하면 '1', '1'이고 '19191'이면 '1', '1', '1' 이렇게 9의 개수보다 항상 1이 많아지므로 -1
}
