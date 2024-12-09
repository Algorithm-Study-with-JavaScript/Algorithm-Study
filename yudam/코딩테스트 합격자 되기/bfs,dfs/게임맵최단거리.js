class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(maps) {
  const direction = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];

  const queue = new Queue();

  const rowLength = maps.length;
  const columnLength = maps[0].length;
  const visited = Array.from({ length: rowLength }, () =>
    Array(columnLength).fill(false)
  );

  queue.push([0, 0, 1]);
  visited[0][0] = true;

  while (!queue.isEmpty()) {
    const [x, y, distance] = queue.pop();

    if (x === rowLength - 1 && y === columnLength - 1) {
      return distance;
    }
    for (let [dx, dy] of direction) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx < rowLength && ny >= 0 && ny < columnLength) {
        if (!visited[nx][ny] && maps[nx][ny] === 1) {
          queue.push([nx, ny, distance + 1]);
          visited[nx][ny] = true;
        }
      }
    }
  }
  return -1;
}

// 입력 예시 1
const maps1 = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];
const result1 = solution(maps1);
console.log(`Result for maps1: ${result1}`);

// 입력 예시 2
const maps2 = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1],
];
const result2 = solution(maps2);
console.log(`Result for maps2: ${result2}`);
