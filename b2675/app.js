let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let T = parseInt(input[0]);
//console.log(T);

for(i = 1; i <= T; i++){
    let R = input[i].split(' ')[0];
    let S = input[i].split(' ')[1];
    let S_arr = S.toString().split('');
    //console.log(R);
    //console.log(S);
    //console.log(S_arr);
    let result = '';
    for(j = 0; j < S_arr.length; j++){
        for(k = 0; k < R; k++){
            result += S_arr[j];
        }
    }
    console.log(result);
}