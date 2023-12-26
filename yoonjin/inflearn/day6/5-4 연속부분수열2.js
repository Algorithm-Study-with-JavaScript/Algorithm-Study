function countSubsequences(arr, N, M) {
  let count = 0;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < N; right++) {
    sum += arr[right];

    while (sum > M) {
      sum -= arr[left];
      left++;
    }

    // sum이 M 이하인 경우, 새로운 부분 수열이 발견됨
    count += right - left + 1;
  }

  return count;
}

function main(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const arr = input[1].split(' ').map(Number);

  const result = countSubsequences(arr, N, M);
  console.log(result);
}

const input = ['5 5', '1 3 1 2 3'];

main(input);
