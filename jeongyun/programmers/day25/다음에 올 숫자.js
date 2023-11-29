const solution = (common) => {
  const diff = common[1] - common[0];
  const ratio = common[1] / common[0];

  if (common[common.length - 1] - common[common.length - 2] === diff) {
    return common[common.length - 1] + diff;
  }

  if (common[common.length - 1] / common[common.length - 2] === ratio) {
    return common[common.length - 1] * ratio;
  }

  return -1;
};

// 다른 사람 풀이
function solution(common) {
  if (common[1] - common[0] == common[2] - common[1]) {
    return common.pop() + common[1] - common[0];
  } else {
    return (common.pop() * common[1]) / common[0];
  }
}
