function solution(id_pw, db) {
  const [id, pw] = id_pw;
  let message = "";
  db.some((e) => {
    if (e[0] === id && e[1] === pw) {
      message = "login";
    } else if (e[0] === id) {
      message = "wrong pw";
    } else {
      message = "fail";
    }
    if(message === "login" || message === "wrong pw") {
      return true;
    }
    console.log(message)
  });
  return message;
}
