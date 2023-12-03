function solution(order) {
  let orderArray = Array.from(String(order));
  return orderArray.reduce((a, e) => {
    if (Number(e) % 3 === 0 && Number(e) !== 0) {
      a++;
    }
    return a;
  }, 0);
}
function solution(order) {
  var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
  return answer;
}
function solution(order) {
  return ("" + order).split(/[369]/).length - 1;
}
