const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');


//console.log(input);
/*
[ '2\r' ]
[ '6', '12', '10\r' ]
[ '30', '50', '72' ]
*/
let T = parseInt(input.shift());
//console.log(T);  ==> 2

for(i = 0; i < T; i++){
    const arr = input[i].split(' ');
    //console.log(arr);
    let H = parseInt(arr.shift());
    //console.log(H); //6 , 30
    arr.shift(); // ==> W (12, 50);
    let N = parseInt(arr.shift());
    //console.log(N); //10 , 72
    let roomNum = 1;
    
    if(H > N){
        console.log(N + "0" + roomNum);
    }else{
        while(N > H){
            roomNum++;
            N = N - H;
        }
        if(roomNum < 10){
            console.log(N + "0" + roomNum);
        }else{
            console.log(N.toString() + roomNum.toString());
        }
    }
}

