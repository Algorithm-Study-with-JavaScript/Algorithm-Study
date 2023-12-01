// 나의 풀이 : for문 돌리며 split으로 개수 구함
function solution(i, j, k) {
    var answer = 0;
    for(l=i; l<=j; l++){
       answer += l.toString().split(k.toString()).length-1;
    }
return answer;
}

// 다른 사람 풀이
function solution(i, j, k) {
    let a ='';
    for(i;i<=j;i++){
        a += i;
    }

    return a.split(k).length-1;
}
