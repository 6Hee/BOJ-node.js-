const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');



let A = input[0].split(' ').map((item) => +item);;
let B = input[1].split(' ').map((item) => +item);;
let C = input[2].split(' ').map((item) => +item);;

let total = (A*B*C).toString();

/*
for(i = 0; i < 10; i++){
    console.log(total.split(i + '').length - 1);
}
*/


for (let i = 0; i <= 9; i++) {
    let count = 0;
    
    for (let j = 0; j < total.length; j++) {
        if (Number(total[j]) === i) {
            count++;
        }
    }
    
    console.log(count);
}
