const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().split('\n');

let M = Number(input[0]);
//console.log(M); //3
let test_score = input[1].toString().split(' ');
//console.log(test_score);

let maxScore = Math.max(...test_score);
//console.log(maxScore);

let arr = [];
for(i = 0; i < M; i++){
    arr.push(test_score[i] / maxScore * 100);
}

const result = arr.reduce(function add(sum, currValue){
    return sum + currValue;
}, 0);

const average = result / arr.length;
console.log(average);

