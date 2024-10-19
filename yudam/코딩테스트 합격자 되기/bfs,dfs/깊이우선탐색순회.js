// function solution(graph, start) {
//   const adjList = {};
//   graph.forEach((element) => {
//     const [start, end] = element;
//     if (!adjList[start]) {
//       adjList[start] = [];
//     }
//     adjList[start].push(end);
//   });

//   const visited = new Set();
//   const result = [];

//   function dfs(visited, node, result) {
//     if (!visited.has(node)) {
//       visited.add(node);
//       result.push(node);
//       (adjList[node] || []).forEach((node) => {
//         dfs(visited, node, result);
//       });
//     }
//   }

//   dfs(visited, start, result);

//   return result;
// }

function solution(graph, start) {
  // 그래프를 객체로 변환 (그래프는 인접 리스트 형태로 저장됨)
  const adjList = {};

  // 각 edge를 순회하면서 출발 노드에 도착 노드를 연결하는 그래프 구조를 만든다
  graph.forEach(([from, to]) => {
    if (!adjList[from]) {
      adjList[from] = [];
    }
    adjList[from].push(to);
  });

  // 인접 리스트의 노드들을 사전순으로 정렬
  // 스택에 인접 노드들을 넣을 때, 역순으로 넣어야 나중에 꺼낼 때 사전순으로 꺼낼 수 있음
  for (const node in adjList) {
    adjList[node].sort().reverse(); // 스택에서 역순으로 넣기 위해 정렬 후 역순
  }

  // 방문한 노드를 저장할 Set (중복을 방지하기 위해 사용)
  const visited = new Set();
  // 탐색에 사용할 스택, 시작 노드를 넣고 시작
  const stack = [start];
  // 결과를 저장할 배열 (탐색 순서를 기록)
  const result = [];

  // 스택이 빌 때까지 반복
  while (stack.length > 0) {
    // 스택의 마지막 노드를 꺼냄 (LIFO 방식으로 스택 사용)
    const node = stack.pop();

    // 현재 노드가 아직 방문되지 않았다면
    if (!visited.has(node)) {
      // 방문 리스트에 추가
      visited.add(node);
      // 탐색 결과에 추가
      result.push(node);

      // 현재 노드에 인접한 노드들을 스택에 추가
      if (adjList[node]) {
        // 인접한 노드들을 스택에 추가 (이미 역순으로 정렬했으니 그대로 push)
        stack.push(...adjList[node]);
      }
    }
  }

  // 방문 순서대로 탐색한 노드를 반환
  return result;
}

// console.log(
//   solution(
//     [
//       ["A", "B"],
//       ["B", "C"],
//       ["C", "D"],
//       ["D", "E"],
//     ],
//     "A"
//   )
// ); // 반환값 : ['A', 'B', 'C', 'D', 'E']
console.log(
  solution(
    [
      ["A", "B"],
      ["A", "C"],
      ["B", "D"],
      ["B", "E"],
      ["C", "F"],
      ["E", "F"],
    ],
    "A"
  )
); // 반환값 : ['A', 'B', 'D', 'E', 'F', 'C']
