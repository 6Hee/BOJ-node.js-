const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

input = input[0].split(' ');

console.log(input[0] === "" ? 0 : input.length);