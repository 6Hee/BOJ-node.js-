const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n').map((item) => +item);


let max = Math.max(...input);

console.log(max);
console.log(input.indexOf(max) + 1);







