var fs = require('fs');
var line = fs.readFileSync('/dev/stdin').toString().trim();
const regex = /c=|c-|dz=|d-|lj|nj|s=|z=/g;
if (regex.test(line)) {
  console.log(
    [...line.match(regex)].length + line.split(regex).join('').length,
  );
} else {
  console.log(line.length);
}
