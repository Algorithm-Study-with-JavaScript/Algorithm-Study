const fs = require("fs");

// 로컬 환경에서는 "input.txt", 리눅스 환경에서는 "/dev/stdin"에서 입력을 읽어옴
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 첫째 줄: 컴퓨터의 수
const numComputers = parseInt(input[0]);

// 둘째 줄: 연결된 쌍의 수
const numConnections = parseInt(input[1]);

// 연결된 컴퓨터 쌍들을 배열로 저장
const connections = input.slice(2).map((line) => line.split(" ").map(Number));

function solution() {
  const adjList = {};

  // 양방향 연결을 추가
  connections.forEach(([start, end]) => {
    if (!adjList[start]) adjList[start] = [];
    if (!adjList[end]) adjList[end] = [];
    adjList[start].push(end);
    adjList[end].push(start); // 반대 방향 추가
  });

  const dfs = (visited, node) => {
    visited.add(node);

    // 인접 노드 방문
    (adjList[node] || []).forEach((adj) => {
      if (!visited.has(adj)) {
        dfs(visited, adj);
      }
    });
  };

  const visited = new Set();
  dfs(visited, 1);

  return visited.size - 1; // 1번 컴퓨터를 제외한 감염된 컴퓨터 수
}

console.log(solution());
