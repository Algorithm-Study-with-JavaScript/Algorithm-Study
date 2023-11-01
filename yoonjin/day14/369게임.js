// 나의 풀이: toString과 for of사용
function solution(order) {
    var answer = 0;
    for (o of order.toString()){
        if (o === "3" || o === "6" || o ==="9"){
            answer+=1
        }
    }
    return answer;
}

// 다른 사람 풀이: 정규표현식 사용 matchAll은 문자열과 일치하는 모든 결과의 반복자 반환
```
const regexp = /[3|6|9]/g;
const str = '2394689';

const array = [...str.matchAll(regexp)];

console.log(array);

Array [Array ["3"], Array ["9"], Array ["6"], Array ["9"]]
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll

```
function solution(order) {
    var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
    return answer;
}
