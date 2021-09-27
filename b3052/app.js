const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().split('\n');


const arr = [];

for( i = 0; i < 10; i++){
    const num = input[i] % 42;
    //console.log(num);

    arr.push(num);
}
//console.log(arr);
const setArr = [...new Set(arr)];
console.log(setArr.length);

/*
const userNum = [];

input.forEach(x => {
     const num = x % 42;
    
    if (userNum.indexOf(num) === -1) { // indexOf 값이 -1 인경우 userNum 배열에 num인 값이 없음
        userNum.push(num);
    }
});

console.log(userNum.length);
*/