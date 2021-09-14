const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);


if(input < 60){
    console.log("F");
}else if(input < 70){
    console.log("D");
}else if(input < 80){
    console.log("C");
}else if(input < 90){
    console.log("B");
}else{
    console.log("A");
}




