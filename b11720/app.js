const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let N = +input[0];
let num = input[1].split('');

//console.log(num);
//console.log(+num[0] + +num[1] + +num[2] + +num[3] + +num[4]);

// 1(i) = Number(num[0]) + Number(num[1]);
// 2(i++ 증감식 사용) = 1 + Number(num[2(j++ 증감식사용)]);
// 3 = 2 + Number(num[3]);
// 4 = 3 + Number(num[4]);
// .
// .
// .
// N = N-1 + Number(num[N-1]);

let result = "";
let a = +num[0];
if(N === 1){
    result = a;
}else{
    for(i = 0; i < N; i++){

        a = +num[0]; // 5
        //a = a + Number(num[1]); // 4
        //a = a + Number(num[2]); // 3
        //console.log(a); // 12
    
        for(j = 1; j < N; j++){
    
            a = a + Number(num[j]);
            //console.log(a);
            result = a;
    
    
        }
    
    
    }
}
console.log(result);


