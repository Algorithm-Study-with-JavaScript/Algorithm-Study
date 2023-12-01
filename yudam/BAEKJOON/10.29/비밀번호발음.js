const fs = require("fs");
const [...input] = fs
  .readFileSync(__dirname + "/example.txt")
  .toString()
  .trim()
  .split("\n");

input.forEach((str) => {

  if(str.match(/[aeiou]/g)){
    
  }  console.log(str.match(/[aeiou]/g));
});

// console.log(input);
