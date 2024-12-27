class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  push(value, priority) {
    this.queue.push({ value, priority });
    this.sort();
  }

  pop() {
    return this.queue.shift();
  }

  sort() {
    this.queue.sort((a, b) => a.priority - b.priority);
  }
}

function dijkstra(graph, start) {
  const distances = {};
  const queue = new PriorityQueue();
  const previous = {};
  const path = []; // 최종 경로
  let smallest;

  // 초기화
  for (let vertex in graph) {
    if (vertex === start) {
      distances[vertex] = 0;
      queue.push(vertex, 0);
    } else {
      distances[vertex] = Infinity;
      queue.push(vertex, Infinity);
    }
    previous[vertex] = null;
  }

  // 알고리즘 실행
  while (queue.queue.length) {
    smallest = queue.pop().value;

    if (distances[smallest] === Infinity) break;

    for (let neighbor in graph[smallest]) {
      let nextNode = graph[smallest][neighbor];
      let candidate = distances[smallest] + nextNode;

      if (candidate < distances[neighbor]) {
        distances[neighbor] = candidate;
        previous[neighbor] = smallest;
        queue.push(neighbor, candidate);
      }
    }
  }

  return { distances, previous };
}

// 예제 그래프
const graph = {
  A: { B: 4, C: 2 },
  B: { A: 4, C: 5, D: 10 },
  C: { A: 2, B: 5, D: 3 },
  D: { B: 10, C: 3 },
};

// 실행
const result = dijkstra(graph, "A");
console.log(result);
