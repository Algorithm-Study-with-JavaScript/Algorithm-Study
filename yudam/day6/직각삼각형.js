// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//   input = line.split(' ');
// }).on('close', function () {
//   let str = "";

//   // input은 string 타입이므로 정수로 바꿔줌 
//   // 실제로 input을 출력하면 [ '3' ]으로 나왔음

//   for (let i = 1; i <= +input[0]; i++) {
//     console.log("*".repeat(i));

//   }

// });

// 
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  solution(Number(input[0])); // 여기서 숫자로 바꿔서 솔루션 함수로 던짐  
});

function solution(n) {
  for (let i = 1; i < n + 1; i++) {
    console.log('*'.repeat(i));
  }
}