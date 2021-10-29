const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

let flag = false;

for(let i = 1 ; i <= input ; i++){
    let n = i.toString();
    let sum = i;
    for(let j = 0 ; j < n.length ; j++){
        sum += parseInt(n[j]);
    }
    
    if (sum == input){
        console.log(i);
        flag = true;
        break;
    }
}

if (!flag){
    console.log(0);
}


//우리 성준 선생님의 답