function solution(M, N) {
  // M이라는 길이를 가지는 한 쪽 면이 길이가 1이 되려면 M-1번 잘라야한다
  // N * 1 길이를 가진 종이가 M개를 1*1이 되게 만드려면 각각 N-1번씩 잘라야한다
  return M - 1 + M * (N - 1);
}

function solution(M, N) {
  return M * N - 1;
}
