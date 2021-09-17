const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let num = input[0].split(' ').map((item) => +item);
let answer = input[1].split(' ').map((item) => +item);


let total = "";
for(let i = 0; i < num[0]; i++){
    if(answer[i] < num[1]){
        total += answer[i] + " ";
    };
};

console.log(total);