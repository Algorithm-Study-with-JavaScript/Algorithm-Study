// 다른 사람 풀이
function solution(polynomial) {
    // +로 문자열 나눔 : "3x + 7 + x" => ["3x","7","x"]
    const arr = polynomial.split(" + ");
    //x 계산 따로, 숫자 계산 따로
    //xNum 은 arr의 요소 중 x를 포함하는 것만을 filter한 후 ["3x","x"]
    //x를 지우고 계수만 남김 ["3",""] => ""는 falsy한 값이므로 1이 대신 저장됨
    //["3","1"] => parseInt한 값을 reduce로 더함
    const xNum = arr
                .filter(n => n.includes("x")) 
                .map(n => n.replace('x', '') || '1')
                .reduce((acc, cur) => acc + parseInt(cur), 0);
    //Nan(숫자아님) 이 아닌 값, 즉 숫자만 필터링한 후 parseInt하여 reduce로 더함
    const num = arr
                .filter(n => !isNaN(n))
                .reduce((acc, cur) => acc + parseInt(cur), 0);

    let answer = [];
    
    //x의 계수가 1일 경우 생략
    if(xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
    
    if(num) answer.push(num);
    //+ 로 join
    return answer.join(" + ");
}
