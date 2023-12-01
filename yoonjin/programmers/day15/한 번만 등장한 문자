// 다른 사람 풀이 : lastIndexOf 메소드가 있는 줄 처음 알았다! x에 해당하는 indexOf(x) === lastIndexOf(x) => 한 번만 등장한 문자!
function solution(s) {
    let res = [];
    for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
    return res.sort().join('');
}
