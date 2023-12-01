// 나의 풀이
function solution(common) {
    var answer = 0;
    if (common[1] - common[0] === common[2] - common[1]){
        answer = common[common.length-1] + common[1] - common[0];
    } else {
        answer = common[common.length-1] * (common[1]/common[0]);
    }
    return answer;
}

// 다른 사람 풀이 pop 사용해서 가장 마지막 인덱스요소 취함 
function solution(common) {
    if ((common[1]-common[0])==(common[2]-common[1])){
        return common.pop() + common[1] - common[0];
    }
    else{
        return common.pop()*common[1]/common[0];
    }
}
