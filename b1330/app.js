const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);
const A = input[0];
//console.log(A);
const B = input[1];
//console.log(B);
if(A > B){
    console.log("\>");
}else if(A < B){
    console.log("\<")
}else if(A == B){
    console.log("\=\=")
}