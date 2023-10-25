function solution(emergency) {
  let newArray = [...emergency];
  for (let i = 1; i <= emergency.length; i++) {
    const max = Math.max(...emergency); // 제일 큰 수 찾기 (배열의 max를 찾으려면 반드시 spread 사용해야함)
    const maxIndex = emergency.indexOf(max); // 가장 큰 수의 인덱스 찾기
    emergency.splice(maxIndex, 1, 0); // 원본 배열에서 가장 큰 수를 0으로 만들고
    newArray.splice(maxIndex, 1, i); // 새 배열에서 가장 큰 수의 인덱스에 해당하는 값을 i로 교체해줌
    // 원본배열에서 원래 가장 큰 값은 0이 되었으므로 또 max를 찾고 원본 배열의 max를 0으로 만든 뒤
    // 새 배열에서는 max의 값을 i로 변경

    // 원본 [76, 24, 3] => [0, 0, 0]
    // new [76, 24, 3] => [1, 2, 3]
  }

  return newArray;
}

// emergency = [3, 76, 24]
function solution(emergency) {
  let sorted = emergency.slice().sort((a, b) => b - a); // [76, 24, 3]
  return emergency.map((v) => sorted.indexOf(v) + 1); // [3, 1, 2]
  // emergency를 순회하면서 sorted 배열에서 emergency 배열의 각 요소의 인덱스 위치를 찾음
  // 그 인덱스 위치 + 1을 리턴함(응급 순서는 1부터 시작하므로)
}
