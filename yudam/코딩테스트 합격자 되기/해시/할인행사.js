// /*
//   매 10일 내에 현재 필요한 음식을 다 살 수 있는지 확인해야함
//   마치 슬라이딩 윈도우처럼 한 칸씩 미룬다고 생각하면?
//  */

// function jae(want, object, bigyo) {
//   if (Object.keys(object).length !== Object.keys(bigyo).length) {
//     return false;
//   }

//   for (let element of want) {
//     if (!bigyo[element]) return false;
//     if (object[element] > bigyo[element]) {
//       return false;
//     }
//   }

//   return true;
// }

// function calculate(array) {
//   const object = {};
//   for (let element of array) {
//     if (object[element]) {
//       object[element]++;
//     } else {
//       object[element] = 1;
//     }
//   }

//   return object;
// }

// function solution(want, number, discount) {
//   let count = 0;
//   const object = {};

//   for (let i in want) {
//     object[want[i]] = number[i];
//   }

//   const restrict = discount.slice(0, 10);
//   const bigyo = calculate(restrict);

//   if (jae(want, object, bigyo)) count++;

//   for (let i = 10; i < discount.length; i++) {
//     restrict.shift();
//     restrict.push(discount[i]);
//     const bigyo = calculate(restrict);
//     if (jae(want, object, bigyo)) {
//       count++;
//     }
//   }
//   return count;
// }

// 원하는 품목이 할인 품목에 포함되어 필요한 수량만큼 등록할 수 있는지 확인하는 함수
function canRegister(want, requiredQuantities, discountWindow) {
  // 원하는 품목의 종류 수가 현재 할인 창의 품목 수와 다르면 등록 불가
  if (
    Object.keys(requiredQuantities).length !==
    Object.keys(discountWindow).length
  ) {
    return false;
  }

  // 각 품목이 할인 창에 존재하고 필요한 수량만큼 있는지 확인
  for (let item of want) {
    if (!discountWindow[item]) return false; // 필요한 품목이 할인 창에 없으면 등록 불가
    if (requiredQuantities[item] > discountWindow[item]) {
      return false; // 필요한 수량보다 할인 창의 수량이 적으면 등록 불가
    }
  }

  // 모든 조건을 만족하면 등록 가능
  return true;
}

// 배열에서 각 품목의 개수를 세어 객체로 반환하는 함수
function countItems(array) {
  const itemCount = {};
  // 배열의 각 품목에 대해 개수를 세어 객체에 저장
  for (let item of array) {
    if (itemCount[item]) {
      itemCount[item]++;
    } else {
      itemCount[item] = 1;
    }
  }
  return itemCount; // 품목별 개수를 가진 객체 반환
}

// 원하는 품목과 수량이 일정 기간 동안 할인되는지 계산하는 함수
function solution(want, number, discount) {
  let count = 0; // 등록 가능한 일수를 카운트하는 변수
  const requiredQuantities = {};

  // 원하는 품목과 수량을 해시맵 형태로 저장
  for (let i in want) {
    requiredQuantities[want[i]] = number[i];
  }

  // 첫 10일 동안의 할인 품목을 계산
  const discountWindow = discount.slice(0, 10); // 첫 10일간의 할인 품목 목록을 슬라이싱
  const discountCounts = countItems(discountWindow); // 첫 10일간의 각 품목 수를 계산

  // 첫 10일 동안 원하는 품목과 수량이 충족되는지 확인
  if (canRegister(want, requiredQuantities, discountCounts)) count++;

  // 슬라이딩 윈도우 방식으로 10일 간격을 한 칸씩 이동하며 검사
  for (let i = 10; i < discount.length; i++) {
    // 윈도우에서 빠져나가는 항목의 개수를 감소
    const itemToRemove = discount[i - 10]; // 윈도우의 맨 앞(오래된) 항목
    discountCounts[itemToRemove]--;

    // 만약 감소된 항목의 개수가 0이 되면 객체에서 제거
    if (discountCounts[itemToRemove] === 0) {
      delete discountCounts[itemToRemove];
    }

    // 윈도우에 새로 추가되는 항목의 개수를 증가
    const itemToAdd = discount[i]; // 윈도우의 맨 뒤에 새로 추가된 항목
    if (discountCounts[itemToAdd]) {
      discountCounts[itemToAdd]++;
    } else {
      discountCounts[itemToAdd] = 1;
    }

    // 현재 윈도우에서 원하는 품목과 수량이 충족되는지 확인
    if (canRegister(want, requiredQuantities, discountCounts)) {
      count++;
    }
  }
  return count; // 등록 가능한 일수 반환
}
