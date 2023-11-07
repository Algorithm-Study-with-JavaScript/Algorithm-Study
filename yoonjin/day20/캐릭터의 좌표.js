// 나의 풀이: if-else if 사용
function solution(keyinput, board) {
    var answer = [];
    let [a,b] = board;
    a = Math.trunc(a/2);
    b = Math.trunc(b/2);
    let x = 0;
    let y = 0;
    
    for(key of keyinput){
        if(key==="up" && y < b ){
            y += 1;
        }else if(key ==="down" && -b < y){
            y -=1;
        }else if(key==="left" && -a < x){
            x -= 1;
        }else if(key ==="right" && x < a){
            x +=1;
        }
    
    }
    return [x,y];
}

// 다른 사람 풀이: switch case 사용
function solution(keyinput, board) {
    let res = [0,0];
    for (let p of keyinput) {
        switch(p){
            case 'left': if (-res[0] < board[0]/2-1) res[0]--; break;
            case 'right': if (res[0] < board[0]/2-1) res[0]++; break;
            case 'up': if (res[1] < board[1]/2-1) res[1]++; break;
            case 'down': if (-res[1] < board[1]/2-1) res[1]--; break;
        }
    }
    return res;
}
