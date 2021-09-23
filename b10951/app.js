const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
    let arr = input[i].trim().split(' ').map((item) => +item);

    console.log(arr[0] + arr[1]);
}