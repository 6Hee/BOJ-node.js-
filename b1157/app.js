const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

input = input[0].toUpperCase();
//console.log(input) ==> MISSISSIPI

const result_arr = new Array(26).fill(0);
//console.log(result_arr);
/*
[
    0, 0, 0, 0, 0, 0, 0, 0,
    4, 0, 0, 0, 1, 0, 0, 1,
    0, 0, 4, 0, 0, 0, 0, 0,
]
*/


for(i in input){
    result_arr[input.charCodeAt(i) - 65]++;

}
var a = result_arr.indexOf(4);
//console.log(a);

const max_num = Math.max(...result_arr);
const max_alpha = result_arr.indexOf(max_num);
//console.log(max_num) // 4 => 중복사용된 알파벳의 개수
//console.log(max_alpha); // 8 => 가장 많이 사용한 알파벳의 배열 숫자

let same = false;
for(let j = 0; j < 26; j++){
    if(result_arr[j] === max_num && max_alpha != j){
        same = true;

        break;
    }
    
}

console.log(same === false ? String.fromCharCode(max_alpha + 65) : "?");


