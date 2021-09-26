let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(' ');

let A = parseInt(input[0].split('').reverse().join(''));
let B = parseInt(input[1].split('').reverse().join(''));

//reverse() => 배열 반대로 바꾸기
//join() => 배열을 문자열로 다시 합치기


console.log(A > B ? A : B);  //삼항 조건 연산자

/*
let A_arr = (A.toString().split('').reverse());
let B_arr = (B.toString().split('').reverse());
//console.log(A_arr);
//console.log(B_arr);
let A_result = '';
let B_result = '';
for(i = 0; i < A_arr.length; i++){
    A_result += A_arr[i];
    B_result += B_arr[i];
}
//console.log(A_result);
//console.log(B_result);
let total = '';
if(A_result > B_result == true){
    total += A_result;
}else{
    total += B_result;
}
*/

//console.log(total);