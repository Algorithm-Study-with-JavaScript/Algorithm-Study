function revert(arr){

  return  arr.map((e) => {
    if(e.toUpperCase() === e) {
      return e.toLowerCase();
    } else {
      return e.toUpperCase();
    }

  })
}
function solution(my_string) {
  return revert(my_string.split("")).join("");
  
}