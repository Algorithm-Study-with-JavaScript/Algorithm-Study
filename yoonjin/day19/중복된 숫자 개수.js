// 나의 풀이: filter 사용해서 조건의 n의 개수 리턴
const solution = (array, n) => array.filter((x)=> x===n).length;

// 다른 사람 풀이: for 반복
function solution(array, n) {
    var answer = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] == n){
            answer++
        }
    }
    return answer;
}
