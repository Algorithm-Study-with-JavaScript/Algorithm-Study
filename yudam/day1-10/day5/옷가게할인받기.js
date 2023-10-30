function solution(price) {
  if(price >= 500000){
      price *= 0.8; 
  } else if(price >= 300000){
      price *= 0.9; 
  } else if(price >= 100000 ){
      price *= 0.95; 
  }
  
  return Math.floor(price);
}

const discounts = [
  [500000, 20],
  [300000, 10],
  [100000,  5],
]

const solution = (price) => {
  for (const discount of discounts)
      if (price >= discount[0])
          return Math.floor(price - price * discount[1] / 100)
  return price
}
