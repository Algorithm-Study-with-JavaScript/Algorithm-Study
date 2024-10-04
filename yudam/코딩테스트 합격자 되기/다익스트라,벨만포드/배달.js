/* roads 배열이 주어졌을 때, nodeNumber에 도달 가능한 노드와 그 노드와의 거리를 리턴
해당 노드는 1부터 시작함
*/
function getVisitableNode(roads, nodeNumber) {
  return roads.reduce((acc, road) => {
    const realRoad = road.slice(0, 2);

    if (realRoad.includes(nodeNumber)) {
      if (realRoad[0] === nodeNumber) {
        acc.push([realRoad[1], road[2]]);
      } else {
        acc.push([realRoad[0], road[2]]);
      }
    }
    return acc;
  }, []);
}
function findMinIndex(arr) {
  const minValue = Math.min(...arr); // 배열에서 가장 작은 값 찾기
  return arr.indexOf(minValue); // 그 값의 인덱스 반환
}

function countAnswer(hours, K) {
  const realHour = hours.slice(1);

  return realHour.filter((element) => element <= K).length;
}

function solution(N, roads, K) {
  // 헷갈리니까 0번 인덱스는 신경쓰지 않기 위해
  const visited = Array(N + 1).fill(false);
  const hours = Array(N + 1).fill(Infinity);

  visited[1] = true; // 1번 노드 방문
  hours[1] = 0; // 자기 자신은 0시간
  const roadsArr = roads;
  let currentVisitableNodes = getVisitableNode(roadsArr, 1);
  currentVisitableNodes.map((element) => (hours[element[0]] = element[1])); // 1번 노드가 방문 가능한 곳들

  while (true) {
    if (visited.slice(1).indexOf(false) === -1) {
      // 1번 노드부터 끝까지 봤을 때 방문하지 않은 노드가 없을 경우
      break;
    }

    const currentVisitingNode = findMinIndex(hours.slice(2)) + 2; // 2번 노드부터 시작해서 끝까지 봤을 때 가장 작은 시간을 가지고 있는 노드

    // 방문했더라도, 최소 비용이 아닐 경우에는 멈춰버려서 문제일 수 있다..
    // 시간이 줄어들었는지 아닌지로 조건문을 따지는 방향으로 바꾸기
    if (visited[currentVisitingNode]) {
      break; // 이미 방문한 노드일 경우 반복문 종료
    }
    visited[currentVisitingNode] = true;
    currentVisitableNodes = getVisitableNode(roadsArr, currentVisitingNode);
    currentVisitableNodes.map((element) => {
      const availableMinHour = hours[currentVisitingNode] + element[1];

      if (
        hours[element[0]] === Infinity || // 방문 가능한 노드의 시간이 무한대이거나
        availableMinHour < hours[element[0]] // 현재 방문 가능해짐으로써 시간이 더 줄어들었을 때
      ) {
        hours[element[0]] = availableMinHour;
      }
    });
  }

  console.log(countAnswer(hours, K));
  return countAnswer(hours, K);
}

// solution(
//   5,
//   [
//     [1, 2, 1],
//     [2, 3, 3],
//     [5, 2, 2],
//     [1, 4, 2],
//     [5, 3, 1],
//     [5, 4, 2],
//   ],
//   3
// );
solution(
  6,
  [
    [1, 2, 1],
    [1, 3, 2],
    [2, 3, 2],
    [3, 4, 3],
    [3, 5, 2],
    [3, 5, 3],
    [5, 6, 1],
  ],
  4
);
