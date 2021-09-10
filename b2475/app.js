const fs = require('fs'); 
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let answer = 0; 

const input = fs.readFileSync(filePath).toString().trim().split(" ").map(i => answer += Math.pow(Number(i), 2)); 
//Math.pow(a , b) = a의 b제곱


console.log(answer % 10)


/*
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0]
input = input.split(' ').map((item) => +item);

 => = arrow function : return을 함축적으로 가지고 있다. 

solution(input[0], input[1], input[2], input[3], input[4])

function solution(a , b, c, d, e){
    let f = "";
    console.log(
       f = ((a ** 2 + b ** 2 + c ** 2 + d ** 2 + e ** 2) % 10)
    )
};
*/
