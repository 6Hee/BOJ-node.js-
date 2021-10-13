const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

//input = input[0].split(' ').map(num => Math.pow(num, 2));
//console.log(input); => [ 36, 64, 100 ]

for(let i of input){
    const trg = i.split(' ').map(num => Math.pow(parseInt(num), 2)).sort((a, b) => a - b);
    //console.log(trg);
    let first = trg.shift();
    let second = trg.shift();
    let third = trg.shift();
    //console.log(first);
    //console.log(second);
    //console.log(third);

    if(first === 0 && second === 0 && third === 0){

    }else if(first + second === third){
        console.log('right');
    }else{
        console.log('wrong');
    }
}
