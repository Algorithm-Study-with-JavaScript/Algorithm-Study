function solution(num1, num2) {
  const answer = Math.floor(num1 / num2);
  return answer;
}



function solution(num1, num2) {
    return Math.trunc(num1 / num2);
}


//문제에서 num1,num2가 양수라고 했으니 상관없지만, 그렇지 않았다면 trunc가 더 적합했을 것