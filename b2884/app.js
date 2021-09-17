const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);

var H = input[0];
var M = input[1];

let $alarm = (H*60 + M) - 45 
let $h_t = Math.floor($alarm / 60); 
let $m_t = $alarm % 60;

if($h_t == -1 || $m_t < 0){
    $h_t = 23;
    $m_t = 60 - (-$m_t);
}


console.log($h_t, $m_t);

