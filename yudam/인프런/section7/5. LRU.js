function solution(size, arr) {
  const cache = [];
  arr.forEach((el, i) => {
    if (cache.includes(el)) {
      cache.splice(cache.indexOf(el), 1);
      cache.unshift(el);
    } else {
      if (cache.length !== size) {
        cache.unshift(el);
      } else if (cache.length === size) {
        cache.pop();
        cache.unshift(el);
      }
    }
  });
  return cache;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
