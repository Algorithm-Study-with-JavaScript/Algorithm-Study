// 나의 풀이: filter 사용
const solution = (array, height) => array.filter((x)=> x>height).length;

// 다른 사람 풀이: map 사용
function solution(array, height) {
    let result = 0;
    array.map((arr) => height < arr && result++);

    return result;
}
