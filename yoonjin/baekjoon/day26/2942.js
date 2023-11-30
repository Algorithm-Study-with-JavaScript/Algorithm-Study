const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  console.log(
    line
      .replaceAll('apa', 'a')
      .replaceAll('epe', 'e')
      .replaceAll('ipi', 'i')
      .replaceAll('opo', 'o')
      .replaceAll('upu', 'u'),
  );
  rl.close();
}).on('close', function () {
  process.exit();
});
