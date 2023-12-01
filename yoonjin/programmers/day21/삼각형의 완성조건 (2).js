// 나의 풀이: a,b(a<b) 가 주어진 두 변이라 생각하고 남은 변의 길이를 c라 할 때 경우의 수 => b = a+c or c= a+b 비교
function solution(sides) {
    let answer = [];
    let[a,b] = sides.sort((a,b)=>a-b);
    // c가 b보다 작은 경우
    for(let i=1; i<= b; i++){
        if(i+a > b){
            answer.push(i);
        }
    }
    
    // c가 b보다 큰 경우
    for(let i=b+1; i< b+a; i++){
        if(a+b > i){
            answer.push(i);
        }
    }
    return answer.length;
}

// 다른 사람 풀이: a 가 가장 긴 변인 경우 : b + c > a > c 이므로 (b를 빼주면)  a > c > a-b => c의 개수는 a-(a-b)-1 = b-1
// c가 가장 긴 변 인 경우 => a + b > c > a 이므로 a > c > a - b => b - 1개
// a=c인 경우 => 1 따라서 총 (2b-1)
function solution(sides) {
    return Math.min(...sides)*2-1
}
