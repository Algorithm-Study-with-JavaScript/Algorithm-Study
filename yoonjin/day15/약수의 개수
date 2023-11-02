// 나의 풀이: 나눠떨어지면 push
function solution(n) {
    var answer = [];
    for(i=1; i<=n; i++){
        if(n%i===0){
            answer.push(i);
        }
    }
    return answer;
}

// 다른 사람 풀이: filter 메소드 사용
function solution(n) {
    return Array(n).fill(0).map((v, index) => v+index+1).filter((v) => n%v===0);
}
