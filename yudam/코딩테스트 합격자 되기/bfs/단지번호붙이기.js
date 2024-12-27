const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input.slice(1).map((line) => line.split(""));

function solution() {
  const visited = Array.from({ length: arr.length }, () =>
    Array(arr.length).fill(false)
  );

  const direction = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  function dfs(x, y) {
    visited[x][y] = true;
    for ([dx, dy] of direction) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx <= arr.length && ny >= 0 && ny <= arr.length) {
        if (!visited[nx][ny] && arr[x][y] == 1) {
          dfs(nx, ny);
        }
      }
    }
  }
}

solution();
