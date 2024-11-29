function solution(D, T) {
  const totalTimes = { P: 0, G: 0, M: 0 };
  const lastPosition = { P: -1, G: -1, M: -1 };

  // 각 집에서 수거할 쓰레기를 확인하고 시간 기록
  for (let i = 0; i < T.length; i++) {
    let houseWaste = T[i];

    // 해당 집의 각 쓰레기 유형에 대해 처리
    for (let j = 0; j < houseWaste.length; j++) {
      let wasteType = houseWaste[j];
      totalTimes[wasteType] += 1; // 쓰레기 수거 시간 1분 추가
      lastPosition[wasteType] = i; // 마지막으로 방문한 위치 기록
    }
  }

  // 트럭별 이동 시간을 각자 계산
  for (let type in lastPosition) {
    let lastHouse = lastPosition[type];
    if (lastHouse !== -1) {
      let travelTime = 0;

      // 마지막 집까지의 이동 시간 계산
      for (let i = 0; i < lastHouse; i++) {
        travelTime += D[i];
      }

      // 마지막 집에서 출발점으로 돌아오는 시간 추가
      travelTime += D[lastHouse];

      // 각 트럭의 총 시간 계산
      totalTimes[type] += travelTime;
    }
  }

  // 가장 오래 걸린 트럭의 시간을 반환
  return Math.max(totalTimes["P"], totalTimes["G"], totalTimes["M"]);
}

// 테스트 케이스
console.log(solution([3, 2, 4], ["MPM", "", "G"])); // 예상 결과: 19
