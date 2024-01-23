function solution(s) {
  const reg = /\+|\-|\/|\*/;
  const stack = [];

  for (let x of s) {
    if (!x.match(reg)) {
      stack.push(x);
    } else {
      const a = +stack.pop();
      const b = +stack.pop();

      if (x === "+") {
        stack.push(b + a);
      } else if (x === "-") {
        stack.push(b - a);
      } else if (x === "*") {
        stack.push(b * a);
      } else {
        stack.push(b / a);
      }
    }
  }
  return stack.join("");
}

function solution2(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === "+") stack.push(lt + rt);
      else if (x === "-") stack.push(lt - rt);
      else if (x === "*") stack.push(lt * rt);
      else if (x === "/") stack.push(lt / rt);
    }
  }
  answer = stack[0];
  return answer;
}

let str = "352+*9-";
console.log(solution(str));
