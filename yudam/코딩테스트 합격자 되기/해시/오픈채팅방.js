// /*

// 프로도가 들어옴
// 프로도 들어옴 ->란 들어옴
// 프로도 나감
// 프로도로 이름 바꿔서 들어옴 -> 안 보임

// 솔직히 유저 아이디로 유저를 구분하는 거임
// 이름은 하등 상관없음
// 이름 변경은 출력되지 않음

// 결국 출력되는 건 들어왔습니다, 나갔습니다 뿐

// 1. 유저 아이디 - 이름을 매핑 -> 충돌 나면 덮어 쓰는 게 맞음
// 2. 유저 아이디 - 행위 매핑 -> 충돌 존재 -> 객체에 객체 추가? ㅜ

// 특이 사항 떠날 때에는 유저 아이디만 줌 닉네임 X
// */

// function solution(record) {
//   const idName = {};

//   record.map((element) => {
//     const method = element.split(" ")[0];
//     const id = element.split(" ")[1];
//     const name = element.split(" ")[2];

//     switch (method) {
//       case "Enter":
//         idName[id] = name;
//         break;

//       case "Change":
//         idName[id] = name;
//     }
//   });

//   const filteredRecord = record.filter((element) => {
//     const method = element.split(" ")[0];
//     return method !== "Change";
//   });

//   const updateRecord = filteredRecord.map((element) => {
//     const method = element.split(" ")[0];
//     const id = element.split(" ")[1];

//     return idName[id].concat(" " + method);
//   });

//   return updateRecord.map((record) => {
//     const [name, method] = record.split(" ");

//     switch (method) {
//       case "Enter":
//         return `${name}님이 들어왔습니다.`;

//       case "Change":
//         break;

//       case "Leave":
//         return `${name}님이 나갔습니다.`;
//     }
//   });
// }

// console.log(
//   solution([
//     "Enter uid1234 Muzi",
//     "Enter uid4567 Prodo",
//     "Leave uid1234",
//     "Enter uid1234 Prodo",
//     "Change uid4567 Ryan",
//   ])
// );

function solution(record) {
  const idName = {};
  const actions = [];

  record.map((element) => {
    const [method, id, name] = element.split(" ");

    // 떠났습니다는 id와 이름을 매핑하는데에 영향을 미치지 않고, 이미 존재하는 객체의 키가 있는데 또 같은 키에 값을 저장하면 덮어씌워지므로
    if (method !== "Leave") {
      idName[id] = name;
    }

    // Change를 제외한 들어왔습니다, 나갔습니다는 정답 배열에 추가해줘야하므로
    if (method !== "Change") {
      actions.push([id, method]);
    }
  });

  return actions.map((action) => {
    const [id, method] = action;

    if (method === "Enter") {
      return `${idName[id]}님이 들어왔습니다.`;
    } else if (method === "Leave") {
      return `${idName[id]}님이 나갔습니다.`;
    }
  });
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
