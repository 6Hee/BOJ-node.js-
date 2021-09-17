const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);

var a = "";
for(let i = 0; i < input; i++){
    a += (input - i) + "\n";
}
console.log(a);
