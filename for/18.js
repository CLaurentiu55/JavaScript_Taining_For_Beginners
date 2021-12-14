/* real number A and an integer N (> 0) are given. Using one loop-statement compute the expression

1 − A + A2 − A3 + … + (−1)N·AN.

Do not use conditional statements. */





// nu pot pune 1 - () la inceput


// caca


var A = 4;
var N = 4;
var sum = 1;

for (i = 1; i < N; i++){
    console.log("sum before operation: " + sum)
    console.log("the i: " + i)
let factor = Math.pow(-1, i);
let pow = Math.pow(A, i);
    sum += factor * pow
    console.log("the sum after operation: " + sum)
    
}
console.log(sum)



var factorial = 1;