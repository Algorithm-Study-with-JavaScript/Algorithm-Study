// 다른 사람 풀이(1): 7이 포함된 문자열을 7이 아닌 수로 쪼개면 7의개수+1개로 나뉘어진다.
// 1772347 => "1","","234",""
function solution(array) {
    return array.join('').split('7').length-1;
}

// 다른 사람 풀이(2): filter로 7만 있는 배열 만들어서 길이 잼
function solution(array) {
    return(array.join().split("").filter((el)=>{return el=="7"}).length)
}
