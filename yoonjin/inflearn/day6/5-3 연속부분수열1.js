function countSubsequence(arr, N, M) {
  let count = 0;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < N; right++) {
    sum += arr[right];

    while (sum > M) {
      sum -= arr[left];
      left++;
    }

    if (sum === M) {
      count++;
    }
  }

  return count;
}

function main(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const arr = input[1].split(' ').map(Number);

  const result = countSubsequence(arr, N, M);
  console.log(result);
}

const input = ['8 6', '1 2 1 3 1 1 1 2'];

main(input);
