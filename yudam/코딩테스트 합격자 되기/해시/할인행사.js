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

function canRegister(want, requiredQuantities, discountWindow) {
  // 원하는 품목의 종류 수가 할인 창의 품목 수와 다르면 등록 불가
  if (
    Object.keys(requiredQuantities).length !==
    Object.keys(discountWindow).length
  ) {
    return false;
  }

  for (let item of want) {
    if (!discountWindow[item]) return false;
    if (requiredQuantities[item] > discountWindow[item]) {
      return false;
    }
  }

  return true;
}

function countItems(array) {
  const itemCount = {};
  for (let item of array) {
    if (itemCount[item]) {
      itemCount[item]++;
    } else {
      itemCount[item] = 1;
    }
  }
  return itemCount;
}

function solution(want, number, discount) {
  let validDays = 0;
  const requiredQuantities = {};

  // 필요한 품목과 수량을 해시맵으로 저장
  for (let i in want) {
    requiredQuantities[want[i]] = number[i];
  }

  // 첫 10일 동안의 할인 품목을 계산
  const discountWindow = discount.slice(0, 10);
  const discountCounts = countItems(discountWindow);

  if (canRegister(want, requiredQuantities, discountCounts)) validDays++;

  // 슬라이딩 윈도우 방식으로 10일 간격을 한 칸씩 이동하며 검사
  for (let i = 10; i < discount.length; i++) {
    discountWindow.shift(); // 첫 번째 항목 제거
    discountWindow.push(discount[i]); // 새로운 항목 추가

    const discountCounts = countItems(discountWindow);

    if (canRegister(want, requiredQuantities, discountCounts)) {
      validDays++;
    }
  }
  return validDays;
}
