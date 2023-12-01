// 나의 풀이: copy 배열과 join 사용
function solution(my_string, num1, num2) {
    var copy = [...my_string];
    var tmp = copy[num1];
    copy[num1] = copy[num2];
    copy[num2] = tmp;
    return copy.join("");
}

// 다른 사람 풀이: 구조 분해할당
function solution(my_string, num1, num2) {
    my_string = my_string.split('');
    [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
    return my_string.join('');
}
