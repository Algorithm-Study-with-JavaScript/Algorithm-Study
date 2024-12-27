function solution(n, computers) {
  const adjList = {};
  // 방문한 컴퓨터를 기록하는 집합
  const visited = new Set();

  // 각 컴퓨터의 연결 상태를 인접 리스트로 구성
  computers.forEach((connections, currentComputer) => {
    connections.forEach((connectionStatus, targetComputer) => {
      if (connectionStatus === 0) {
        return; // 연결이 없는 경우
      }

      // 현재 컴퓨터가 처음 등장한 경우 빈 배열로 초기화
      if (!adjList[currentComputer]) {
        adjList[currentComputer] = [];
      }
      // 자기 자신이 아닌 컴퓨터와 연결되어 있으면 인접 리스트에 추가
      if (currentComputer !== targetComputer) {
        adjList[currentComputer].push(targetComputer);
      }
    });
  });

  function dfs(visited, computer) {
    if (visited.has(computer)) {
      return;
    }
    visited.add(computer);

    // 연결된 모든 컴퓨터를 재귀적으로 탐색
    (adjList[computer] ?? []).forEach((neighbor) => dfs(visited, neighbor));
  }

  let networkCount = 0;

  // 모든 컴퓨터를 순회하며 방문하지 않은 경우 새로운 네트워크로 간주
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(visited, i); // 해당 네트워크 탐색
      networkCount += 1; // 네트워크 수 증가
    }
  }
  return networkCount; // 전체 네트워크 수 반환
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
);
