function subtractDays(dateStr, k) {
  let [year, month, day] = dateStr.split("-").map(Number);

  day -= k - 1;

  while (day <= 0) {
    day += 30;
    month -= 1;
    if (month <= 0) {
      month += 12;
      year -= 1;
    }
  }

  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(
    2,
    "0"
  )}`;
}

// 주어진 날짜 범위 내의 레코드를 필터링하는 함수
function filterRecordsInRange(records, k, date) {
  const startDateStr = subtractDays(date, k);
  const endDateStr = date;

  return records.filter((record) => {
    const recordDate = record.split(" ")[0];
    return recordDate >= startDateStr && recordDate <= endDateStr;
  });
}

// 필터링된 레코드에서 pid와 uid를 매핑하는 함수
function mapPidToUid(filteredRecords) {
  const pidToUidMap = new Map();

  filteredRecords.forEach((record) => {
    const [date, uid, pid] = record.split(" ");
    if (!pidToUidMap.has(pid)) {
      pidToUidMap.set(pid, []);
    }
    pidToUidMap.get(pid).push(uid);
  });

  return pidToUidMap;
}

// 각 pid의 재구매율을 계산하는 함수
function calculateRepurchaseRates(pidToUidMap) {
  const pidToRepurchaseRate = new Map();

  pidToUidMap.forEach((uids, pid) => {
    const uniqueUids = new Set(uids);
    const totalPurchases = uids.length;
    const repurchaseCount = totalPurchases - uniqueUids.size;
    const repurchaseRate = repurchaseCount / uniqueUids.size;
    pidToRepurchaseRate.set(pid, {
      repurchaseRate,
      totalPurchases,
    });
  });

  return pidToRepurchaseRate;
}

// 재구매율을 기준으로 정렬하는 함수
function sortRepurchaseRates(pidToRepurchaseRate) {
  const sortedEntries = Array.from(pidToRepurchaseRate.entries()).sort(
    ([pidA, dataA], [pidB, dataB]) => {
      if (dataB.repurchaseRate !== dataA.repurchaseRate) {
        return dataB.repurchaseRate - dataA.repurchaseRate; // 재구매율 기준 내림차순
      }
      if (dataB.totalPurchases !== dataA.totalPurchases) {
        return dataB.totalPurchases - dataA.totalPurchases; // 총 구매 횟수 기준 내림차순
      }
      // 상품 아이디 기준 오름차순 (숫자 기준)
      const pidANum = parseInt(pidA.replace("pid", ""), 10);
      const pidBNum = parseInt(pidB.replace("pid", ""), 10);
      return pidANum - pidBNum;
    }
  );

  return sortedEntries.map(([pid]) => pid);
}
// 주어진 레코드를 k일 이전부터 주어진 날짜까지 필터링하고 재구매율을 계산 및 정렬하는 함수
function solution(records, k, date) {
  const filteredRecords = filterRecordsInRange(records, k, date);

  if (filteredRecords.length === 0) {
    return ["no result"];
  }
  const pidToUidMap = mapPidToUid(filteredRecords);

  const pidToRepurchaseRate = calculateRepurchaseRates(pidToUidMap);
  // console.log(pidToUidMap);
  // console.log(pidToRepurchaseRate);
  const sortedRepurchaseRates = sortRepurchaseRates(pidToRepurchaseRate);

  if (sortedRepurchaseRates.length === 0) {
    return ["no result"];
  }
  // console.log(sortedRepurchaseRates);
  return sortedRepurchaseRates;
}
