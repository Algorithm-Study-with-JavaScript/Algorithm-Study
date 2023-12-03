function solution(common) {
  if (common[1] - common[0] === common[2] - common[1]) {
    const mi = common[1] - common[0];
    return common[common.length - 1] + mi;
  }

  if (common[1] / common[0] === common[2] / common[1]) {
    const mu = common[1] / common[0];
    return common[common.length - 1] * mu;
  }
}

function solution(common) {
  if (common[1] - common[0] == common[2] - common[1]) {
    return common.pop() + common[1] - common[0];
  } else {
    return (common.pop() * common[1]) / common[0];
  }
}
