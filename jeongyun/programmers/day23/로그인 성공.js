const solution = (id_pw, db) => {
  let result = "fail";

  db.forEach((item) => {
    if (item[0] === id_pw[0]) {
      if (item[1] === id_pw[1]) {
        result = "login";
      } else {
        result = "wrong pw";
      }
    }
  });

  return result;
};

// 다른 사람 풀이
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  return map.has(id) ? (map.get(id) === pw ? "login" : "wrong pw") : "fail";
}
