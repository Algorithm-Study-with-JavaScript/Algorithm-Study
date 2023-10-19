function solution(array) {
  const count = new Map();
  let max = 0;
  let arr = new Array();
  
  array.forEach(element => {
      
      if(!count.has(element)){
          count.set(element, 1); 
      } else{
          count.set(element, count.get(element) + 1);
      }
        
      max = count.get(element) > max ? count.get(element) : max;
  });
  
  for (let [key, value] of count){
      if(value === max){
          arr.push(key);
      }
  }
  return answer = arr.length === 1 ? arr[0] : -1;
}


function solution(array) {
    let m = new Map();
    for (let n of array) m.set(n, (m.get(n) || 0)+1);
    m = [...m].sort((a,b)=>b[1]-a[1]);
    return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}
