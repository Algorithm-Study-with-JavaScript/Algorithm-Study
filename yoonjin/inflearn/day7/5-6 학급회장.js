function findClassPresident(N, votes) {
  const voteCount = {};

  // 투표 결과를 순회하며 각 후보의 득표 수를 카운트
  for (let i = 0; i < N; i++) {
    const candidate = votes[i];
    if (voteCount[candidate] === undefined) {
      voteCount[candidate] = 1;
    } else {
      voteCount[candidate]++;
    }
  }

  let maxVotes = 0;
  let president = '';

  // 득표수가 가장 많은 후보를 찾음
  for (const candidate in voteCount) {
    if (voteCount[candidate] > maxVotes) {
      maxVotes = voteCount[candidate];
      president = candidate;
    }
  }

  return president;
}

// 예제 입력값
const N = 15;
const votes = 'BACBACCACCBDEDE';

// 결과 출력
console.log(findClassPresident(N, votes)); // 출력: C
