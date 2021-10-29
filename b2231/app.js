const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

input = input.split(' ').map((item) => +item);
console.log(input);
const arr = [];
for(let i = 0; i < input[0]; i++){
    let answer = i;
    //answer = 12일 때
    // 1 + 2를 만들기 
    //console.log(answer);
    let sum = 0;
    do{
        //console.log(answer);
        sum += answer%10;
        answer = Math.floor(answer/10);
    }while(answer > 0);
    
    
    if(input == i + sum){
        arr.push(i); //#2. 고로 input == i + sum의 값이 true라면 바로 출력하면 된다.
    }
    
}
//console.log(arr); [ 198, 207 ]
arr.sort(); // => #1. 제일 작은 수부터 찾기 때문에 쓸 필요 없음
if(arr[0] == undefined){
    console.log(0);
}else{

    console.log(arr[0]);
}
