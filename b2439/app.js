const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];

/*
input = input.split(' ').map((item) => +item);
let a = "";
for(let i = 1; i <= input; i++){
    for(let j = 1; j <= input - i; j++){
        a += " ";
    }
    for(let k = 1; k <= i; k++){
        a += "*";
    }
    a += "\n";
};
console.log(a);
*/
input = +input;  // 정수로 변환
for(let i = 1; i <= input; i++){
    console.log(" ".repeat(input - i)/*공백입력을 4번*/ + "*".repeat(i) /* *을 1번 */);
}
