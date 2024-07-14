// 날짜 문자열을 { year, month, day } 객체로 변환하는 함수
function parseDate(dateStr) {
  const [year, month, day] = dateStr.split("-").map(Number);
  return { year, month, day };
}

// 날짜 객체를 "YYYY-MM-DD" 형식의 문자열로 변환하는 함수
function formatDate({ year, month, day }) {
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(
    2,
    "0"
  )}`;
}

// 날짜에서 k일을 빼는 함수
function subtractDays(date, k) {
  let { year, month, day } = parseDate(date);

  day -= k;

  while (day <= 0) {
    day += 31;
    month -= 1;
    if (month <= 0) {
      month += 12;
      year -= 1;
    }
  }

  return formatDate({ year, month, day });
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

// 주어진 레코드를 k일 이전부터 주어진 날짜까지 필터링하고 재구매율을 계산하는 함수
function solution(records, k, date) {
  const filteredRecords = filterRecordsInRange(records, k, date);

  const mapPidToMap = mapPidToUid(filteredRecords);
  console.log(mapPidToMap);
}

// 테스트 데이터
const records = [
  "2020-01-01 uid1 pid1",
  "2020-02-26 uid1 pid1",
  "2020-02-26 uid2 pid1",
  "2020-02-27 uid3 pid2",
  "2020-02-28 uid4 pid2",
  "2020-03-01 uid1 pid1",
  "2020-03-03 uid2 pid2",
  "2020-03-04 uid2 pid2",
  "2020-03-05 uid3 pid3",
  "2020-03-05 uid3 pid3",
  "2020-03-05 uid1 pid4",
];
const k = 10;
const date = "2020-03-05";

solution(records, k, date);
