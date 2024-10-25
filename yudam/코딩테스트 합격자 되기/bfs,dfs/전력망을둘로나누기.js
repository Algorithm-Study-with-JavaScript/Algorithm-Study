/* 가장 인접한 게 많은 것들 중에 자르면 많은 값을 가질 거 같은걸 찾기
후보가 여러 개겠지?
-> 모든 이웃 노드를 기준으로 탐색한 후 가장 많은 노드를 찾기
그런데, 그 때 max 값은 제외해야함
*/
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

  let maxLength = -Infinity;
  let maxNode = null;

  for (const [node, adjNodes] of Object.entries(adjList)) {
    const adjNodesLength = adjNodes.length;
    if (adjNodesLength > maxLength) {
      maxLength = adjNodesLength;
      maxNode = node;
    }
  }

  const visited = new Set();

  function dfs(visited, node, result) {
    if (visited.has(node) || node === Number(maxNode)) {
      return;
    }

    result.push(node);
    visited.add(node);
    adjList[node].forEach((otherNode) => dfs(visited, otherNode, result));
  }

  let secondMaxNode = null;
  let secondMaxLength = -Infinity;

  adjList[maxNode].forEach((neighbor) => {
    const result = [];
    dfs(visited, neighbor, result);
    console.log("neighbor", neighbor, "result", result);

    if (secondMaxNode < result.length) {
      secondMaxLength = result.length;
      secondMaxNode = neighbor;
    }
  });

  return n - secondMaxLength - secondMaxLength;
}

solution(9, [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
]);

solution(4, [
  [1, 2],
  [2, 3],
  [3, 4],
]);

solution(7, [
  [1, 2],
  [2, 7],
  [3, 7],
  [3, 4],
  [4, 5],
  [6, 7],
]);
