let result = 1;
for (let i = balls; i > share; i--) {
  result *= i;
}
for (let i = balls - share; i >= 1; i--) {
  result /= i;
}
return result;

function solution(balls, share) {
    
  function fac(n){
      if(n <= 1) return 1;
      return fac(n-1) * n;
  }
  
  return Math.round(fac(balls) / (fac(balls- share) * fac(share)));

}