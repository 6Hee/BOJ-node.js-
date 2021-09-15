const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);

for(i = 1; i < 10; i++){
    console.log(input+ " " + "*" + " " + i + " " + "=" + " " + input*i)
}