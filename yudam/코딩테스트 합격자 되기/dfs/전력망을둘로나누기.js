function solution(n, connections) {
  const adjList = {};
  connections.forEach((connection) => {
    const [v1, v2] = connection;

    if (!adjList[v1]) {
      adjList[v1] = [];
    }
    if (!adjList[v2]) {
      adjList[v2] = [];
    }

    adjList[v1].push(v2);
    adjList[v2].push(v1);
  });

  let minDifference = Infinity;

  function dfs(visited, node) {
    if (visited.has(node)) return;

    visited.add(node);
    adjList[node].forEach((neighbor) => dfs(visited, neighbor));
  }

  for (const [v1, v2] of connections) {
    adjList[v1] = adjList[v1].filter((node) => node != v2);
    adjList[v2] = adjList[v2].filter((node) => node != v1);

    const visited = new Set();
    dfs(visited, v1);
    const size1 = visited.size;

    // 두 번째 서브 네트워크는 전체 노드에서 첫 번째 네트워크 크기를 뺀 값
    const size2 = n - size1;
    const difference = Math.abs(size1 - size2);
    minDifference = Math.min(minDifference, difference);

    console.log(adjList);
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

// console.log(
//   solution(4, [
//     [1, 2],
//     [2, 3],
//     [3, 4],
//   ])
// ); // Expected output: 0

// console.log(
//   solution(7, [
//     [1, 2],
//     [2, 7],
//     [3, 7],
//     [3, 4],
//     [4, 5],
//     [6, 7],
//   ])
// ); // Expected output: 1
