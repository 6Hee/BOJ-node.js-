const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let num = fs.readFileSync(filePath).toString().split('\n');

num = input[0].split(' ').map((item) => +item);
input = input[1].split(' ').map((item) => +item);

let min = input[0];
let max = input[0];

for(let i = 1; i< num; i++){
    if(min > input[i]){
        min = input[i];
    }
    if(max < input[i]){
        max = input[i];
    }
}
console.log(min + " " + max);