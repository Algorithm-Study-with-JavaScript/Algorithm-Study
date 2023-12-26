function areAnagrams(word1, word2) {
  // 대소문자를 구분하여 비교하기 위해 소문자로 변환
  const lowerWord1 = word1.toLowerCase();
  const lowerWord2 = word2.toLowerCase();

  // 문자열을 배열로 변환하여 정렬 후 다시 합침
  const sortedWord1 = lowerWord1.split('').sort().join('');
  const sortedWord2 = lowerWord2.split('').sort().join('');

  // 정렬된 문자열이 같으면 아나그램
  if (sortedWord1 === sortedWord2) {
    return 'YES';
  } else {
    return 'NO';
  }
}

// 예제 입력값
const word1 = 'AbaAeCe';
const word2 = 'baeeACA';

// 결과 출력
console.log(areAnagrams(word1, word2)); // 출력: YES
