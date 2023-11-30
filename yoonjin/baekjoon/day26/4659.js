const input = require('fs').readFileSync('dev/stdin').toString().trim().split(/\r?\n/);

const gather = ['a', 'e', 'i', 'o', 'u'];
const allowedStr = ['ee', 'oo'];

for (let i = 0; i < input.length - 1; i++) {
    const word = input[i];
    let vowelCount = 0;
    let consonantCount = 0;
    let isAcceptable = true;

    if (!gather.some(element => word.includes(element))) {
        console.log(`<${word}> is not acceptable.`);
        continue;
    }

    for (let j = 0; j < word.length; j++) {
        const currentChar = word[j];
        const nextChar = word[j + 1];

        if (currentChar === nextChar && !allowedStr.includes(currentChar + nextChar)) {
            console.log(`<${word}> is not acceptable.`);
            isAcceptable = false;
            break;
        }

        if (gather.includes(currentChar)) {
            consonantCount = 0;
            vowelCount++;
            if (vowelCount >= 3) {
                console.log(`<${word}> is not acceptable.`);
                isAcceptable = false;
                break;
            }
        } else {
            vowelCount = 0;
            consonantCount++;
            if (consonantCount >= 3) {
                console.log(`<${word}> is not acceptable.`);
                isAcceptable = false;
                break;
            }
        }
    }

    if (isAcceptable) {
        console.log(`<${word}> is acceptable.`);
    }
}
