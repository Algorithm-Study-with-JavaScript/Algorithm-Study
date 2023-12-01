// 냐의 풀이: map과 some 삼항연산자 이용해서 아이디와 pw 모두 일치 하면 login 아이디만 일치하면 wrong pw 아니면 fail 리턴
const solution = (id_pw, db) => db.some((el)=>id_pw[0]==el[0] && id_pw[1]==el[1]) ? "login" 
  : (db.some((el)=>id_pw[0]==el[0] && id_pw[1]!=el[1]) ? "wrong pw": "fail");

// 다른 사람 풀이: 
// 1. map 사용해서 id로 pw을 조회할 수 있게함
// 2. has get 사용해서 id를 가지고 있다면 해당 id를 키값으로 사용해 pw가 동일한지 get으로 확인
// 그래 map은 key-value쌍으로 이뤄졌던 거다... for문 셔틀이 아니라 ㅜㅜ https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
}
