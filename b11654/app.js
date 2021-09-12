const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

input = input[0];
const answer = input.charCodeAt();
console.log(answer);
