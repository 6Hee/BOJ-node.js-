const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

//1 > 1칸
//1 + 7 = 8 > 2칸
//1 + 19 = 20 > 3칸
// ... 

//6의 배수만큼 증가폭

input = +input;
let range = 1;
let sum = 1;

while(sum < input){
    sum += 6 * range++;
}
console.log(range);
