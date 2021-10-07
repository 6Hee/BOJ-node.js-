const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

input = input.toString().split(' ');
let x = input[0];
let y = input[1];
let w = input[2];
let h = input[3];
const arr = [x, y, String(w-x), String(h-y)];


arr.sort((a, b) => {
    return a - b;
})
console.log(arr[0]);

/*
console.log(Math.min.apply(null, arr));
*/