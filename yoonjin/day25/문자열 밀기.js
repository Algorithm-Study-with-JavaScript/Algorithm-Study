// 다른 사람 풀이(1): for문으로 돌리며 i가 곧 밀어낸 횟수
function solution(A, B) {
    let arr = [...A]
    for(let i=0; i<arr.length; i++){
        if(A==B){
            return i;
        }else{
            arr.unshift(arr.pop());
            if (arr.join('') == B){
                return i+1;
            }
        }
    }
    return -1;
}

// 다른 사람 풀이(2):b를 두번 반복시킨 다음 a가 그 안에 몇 번 째 인덱스인지 찾아보면 몇 번 밀었을 때 그 글자를 만들 수 있는지 알 수 있다. indexOf 자체가 값이 없으면 -1을 출력 
let solution=(a,b)=>(b+b).indexOf(a)
