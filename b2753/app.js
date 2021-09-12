const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);

//&& 둘다 true 일때 
//|| 둘 중 하나만 맞아도 true
// !() = false
if(input[0]%4 == 0 && !(input[0]%100 == 0)){
    console.log("1");
}else if(input[0]%100 == 0 && !(input[0]%400 == 0)){
    console.log("0");
}else if(input[0]%400 == 0){
    console.log("1");
}else{
    console.log("0");
}
