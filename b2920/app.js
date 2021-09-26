const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().split('\n');


let num = input.toString().split(' ');

let count = 0;
for(let i = 0; i < 7; i++){
    if(num[i] < num[i+1]){
        count++;
    }
}


let result = {
    0 : 'descending',
    7 : 'ascending'
}[count];

console.log(result || 'mixed');