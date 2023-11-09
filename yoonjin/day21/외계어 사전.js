// 다른 사람 풀이 : some 활용
// d 배열 중 하나라도 p랑 일치 하는 string이 있다면 1리턴
function solution(p, d) {
    return d.some(s => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;
}
