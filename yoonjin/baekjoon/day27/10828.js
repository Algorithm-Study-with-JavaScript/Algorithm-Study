const readline = require('readline');

function solution() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let testNum;
  const stack = [];
  const answer = [];

  rl.on('line', (line) => {
    if (!testNum) {
      testNum = parseInt(line);
      return;
    }

    const [cmd, num] = line.trim().split(/\s/g);

    switch (cmd) {
      case 'push':
        stack.push(parseInt(num));
        break;
      case 'pop':
        answer.push(stack.length === 0 ? -1 : stack.pop());
        break;
      case 'size':
        answer.push(stack.length);
        break;
      case 'empty':
        answer.push(stack.length === 0 ? 1 : 0);
        break;
      case 'top':
        answer.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
        break;
      default:
        break;
    }
  });

  rl.on('close', () => {
    console.log(answer.join('\n'));
  });
}

solution();
