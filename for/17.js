/* A real number A and an integer N (> 0) are given. Using one loop-statement compute the sum

1 + A + A2 + A3 + … + AN. */

var A = 4;
var N = 1;
var sum = 0;

for (let i = 0; i < A; i++){
    sum+= Math.pow(A, N)
    console.log(sum)
}
