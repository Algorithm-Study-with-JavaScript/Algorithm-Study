function solution(phone_book) {
  phone_book.sort();

  let answer = true;
  for (let i = 0; i < phone_book.length - 1; i++) {
    // 마지막 인덱스까지 확인하기 위해 수정
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      // startsWith로 수정
      answer = false;
      break;
    }
  }

  return answer;
}

// 테스트 케이스 1
let phone_book = ["119", "97674223", "1195524421"];
console.log(solution(phone_book)); // Expected output: false

// 테스트 케이스 2
phone_book = ["123", "456", "789"];
console.log(solution(phone_book)); // Expected output: true

// 테스트 케이스 3
phone_book = ["12", "123", "1235", "567", "88"];
console.log(solution(phone_book)); // Expected output: false

function solution(phone_book) {
  phone_book.sort(); // 정렬을 하지 않으면 모든 값을 비교해야하므로 시간복잡도는 n^2
  // 정렬 후에 인접한 값만 비교하는 식으로 구현

  let answer = true;
  for (let i = 0; i < phone_book.length; i++) {
    // 마지막 번호는 비교 대상이 없으므로 phone_book.length - 1까지만 순회
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      answer = false;
      break;
    }
  }
  return answer;
}
