const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().split('\n');

input = input.toString().split('');


let result = [];
//fromCharCode = 아스키 코드 소문자 a~z까지 97~ 122
for(i = 97; i <= 122; i++){
    result.push(input.indexOf(String.fromCharCode(i)));
}
console.log(result.join(" ")); //join => 배열을 문자로 변환 후 정렬


/*

내가 풀은 정답
let arr = {
    a : input.indexOf("a"),
    b : input.indexOf("b"),
    c : input.indexOf("c"),
    d : input.indexOf("d"),
    e : input.indexOf("e"),
    f : input.indexOf("f"),
    g : input.indexOf("g"),
    h : input.indexOf("h"),
    i : input.indexOf("i"),
    j : input.indexOf("j"),
    k : input.indexOf("k"),
    l : input.indexOf("l"),
    m : input.indexOf("m"),
    n : input.indexOf("n"),
    o : input.indexOf("o"),
    p : input.indexOf("p"),
    q : input.indexOf("q"),
    r : input.indexOf("r"),
    s : input.indexOf("s"),
    t : input.indexOf("t"),
    u : input.indexOf("u"),
    v : input.indexOf("v"),
    w : input.indexOf("w"),
    x : input.indexOf("x"),
    y : input.indexOf("y"),
    z : input.indexOf("z"),
}

console.log(arr.a , arr.b, arr.c, arr.d, arr.e, arr.f, arr.g, arr.h, arr.i, arr.j,arr.k, arr.l, arr.m, arr.n, arr.o, arr.p, arr.q, arr.r, arr.s, arr.t, arr.u, arr.v, arr.w, arr.x, arr.y, arr.z,)

*/
