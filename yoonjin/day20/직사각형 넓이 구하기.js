// 나의 풀이: 모든 경우 if else
// dot1을 기준으로 x가 다르지만 y가 같은 점, y가 다르지만 x가 같은 점, 그리고 x,y가 모두 다른 점 (대각선에 위치한 점) 과의 거리를 구함
function solution(dots) {
    var answer = 0;
    let width = 0;
    let height = 0;
    let [dot1,dot2,dot3,do4] = dots;
    if(dot1[0] === dot2[0]){
        width =  Math.abs(dot1[0]-dot3[0]);
        height = Math.abs(dot1[1]-dot2[1]);
    }else if(dot1[1] === dot2[1]){
        width =  Math.abs(dot1[0]-dot2[0]);
        height = Math.abs(dot1[1]-dot3[1]);
    }else if(dot1[1] === dot3[1]){
        width =  Math.abs(dot1[0]-dot3[0]);
        height = Math.abs(dot1[1]-dot2[1]);
    }
    return width*height;
}

// 다른 사람 풀이: x에 모든 점의 x값, y에 모든 점의 y값을 푸시 => x의 최댓값 - x의 최솟값 * y의 최댓값- y의 최솟갑 으로 넓이 구함
// -> 기본적으로 직사각형은 모든 각이 직각이란 걸 잘 활용한 풀이 
function solution(dots) {
    let x = [],
        y = [];

    for (let pos of dots) {
        x.push(pos[0]);
        y.push(pos[1]);
    }

    return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y))
}
