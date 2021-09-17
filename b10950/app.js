const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let forNum = input[0].split(' ').map((item) => +item);

let total = "";
for(i = 1; i <= forNum; i++){
    let a = input[i].split(' ').map((item) => +item);
    total += (a[0] + a[1]) + "\n";
}
console.log(total);


