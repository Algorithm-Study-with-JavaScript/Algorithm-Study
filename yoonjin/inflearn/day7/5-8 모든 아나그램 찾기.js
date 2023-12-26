function countAnagramSubstrings(S, T) {
  const sLength = S.length;
  const tLength = T.length;

  // T 문자열의 문자 빈도수를 저장하는 객체 생성
  const tMap = {};
  for (let char of T) {
    tMap[char] = tMap[char] ? tMap[char] + 1 : 1;
  }

  let count = 0;
  let left = 0,
    right = 0,
    matches = 0;
  const sMap = {};

  while (right < sLength) {
    const char = S[right];
    // S 문자열의 문자 빈도수를 저장
    sMap[char] = sMap[char] ? sMap[char] + 1 : 1;

    // 새로 추가된 문자가 T에 포함되는 경우 카운트 증가
    if (tMap[char] !== undefined && sMap[char] <= tMap[char]) {
      matches++;
    }

    // 윈도우 크기 유지
    while (matches === tLength) {
      // 아나그램인 경우
      if (right - left + 1 === tLength) {
        count++;
      }

      const leftChar = S[left];
      sMap[leftChar]--;

      // 윈도우 왼쪽 이동 및 matches 갱신
      if (tMap[leftChar] !== undefined && sMap[leftChar] < tMap[leftChar]) {
        matches--;
      }

      left++;
    }

    right++;
  }

  return count;
}

// 예제 입력값
const S = 'bacaAacba';
const T = 'abc';

// 결과 출력
console.log(countAnagramSubstrings(S, T)); // 출력: 3
