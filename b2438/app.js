const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);


var a = "";
var b = "\*";
for(i = 1; i <= input; i++){
    a += b;
    console.log(a);
}