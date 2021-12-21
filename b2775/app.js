const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n').map((item) => +item);

const T = input.shift();
//console.log(T); //2

for (let i = 0; i < T; i++){
    const k = input.shift();
    const n = input.shift();
    //console.log(k , n); //1회차 [1, 3] 2회차 [2, 3]

    const array = [];

    for (let i = 0; i <= k; i++){
        array.push([1]);
        for(let j = 1; j < n; j++){
            if(i === 0){  //0층
                array[i].push(j + 1);
                //console.log(array);
            }else{
                array[i].push(array[i][j - 1] + array[i - 1][j])
                //console.log(array);
            }
        }
    }
    //console.log(array); //[ [ 1, 2, 3 ], [ 1, 3, 6 ], [ 1, 4, 10 ] ]
    console.log(array[k][n - 1]);

}