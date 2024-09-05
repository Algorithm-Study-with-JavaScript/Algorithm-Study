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
