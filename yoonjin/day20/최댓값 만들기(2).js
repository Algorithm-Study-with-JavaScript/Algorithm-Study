// 나의 풀이 : 정렬 후 최솟값끼리 곱한 것과 최댓값끼리 곱한 것 중 최대를 취함
function solution(numbers) {
    let base = numbers.sort((a,b)=>a-b);
    let limit = numbers.length -1;
    return Math.max(base[0]*base[1],base[limit-1]*base[limit]);
    
}

// 다른 사람 풀이: 이중 for문 사용
function solution(numbers) {
    var answer = [];
    for(let i = 0; i < numbers.length - 1; i++){
        for(let j = i + 1; j < numbers.length; j++){
            answer.push(numbers[i] * numbers[j]);
        }
    }
    return Math.max(...answer);
}
