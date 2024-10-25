/* 가장 인접한 게 많은 것들 중에 자르면 많은 값을 가질 거 같은걸 찾기
후보가 여러 개겠지?
-> 모든 이웃 노드를 기준으로 탐색한 후 가장 많은 노드를 찾기
그런데, 그 때 max 값은 제외해야함
*/
function solution(n, connections) {
  // 인접 리스트 생성
  const adjList = {};
  connections.forEach(([v1, v2]) => {
    if (!adjList[v1]) adjList[v1] = [];
    if (!adjList[v2]) adjList[v2] = [];
    adjList[v1].push(v2);
    adjList[v2].push(v1);
  });

  function dfs(node, visited) {
    visited.add(node);
    let count = 1; // 현재 노드 카운트

    for (const neighbor of adjList[node]) {
      if (!visited.has(neighbor)) {
        count += dfs(neighbor, visited);
      }
    }

    return count;
  }

  let minDifference = Infinity;

  // 각 연결을 끊어보며 네트워크 차이 계산
  for (const [v1, v2] of connections) {
    // v1 - v2 연결을 제거하고 탐색
    adjList[v1] = adjList[v1].filter((node) => node !== v2);
    adjList[v2] = adjList[v2].filter((node) => node !== v1);

    // 첫 번째 서브 네트워크 크기 계산
    const visited = new Set();
    const size1 = dfs(v1, visited);

    // 두 번째 서브 네트워크는 전체 노드에서 첫 번째 네트워크 크기를 뺀 값
    const size2 = n - size1;
    const difference = Math.abs(size1 - size2);
    minDifference = Math.min(minDifference, difference);

    // 연결 복원
    adjList[v1].push(v2);
    adjList[v2].push(v1);
  }

  return minDifference;
}

// 테스트 케이스
console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
); // Expected output: 3

console.log(
  solution(4, [
    [1, 2],
    [2, 3],
    [3, 4],
  ])
); // Expected output: 0

console.log(
  solution(7, [
    [1, 2],
    [2, 7],
    [3, 7],
    [3, 4],
    [4, 5],
    [6, 7],
  ])
); // Expected output: 1
