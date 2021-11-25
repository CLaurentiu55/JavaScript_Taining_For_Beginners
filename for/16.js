/* A real number A and an integer N (> 0) are given. 
Using one loop-statement compute and output powers AK for all integer exponents K in the range 1 to N. */

var A = 3;
var N = 3;
var K = 2;

for (let i = 1; i < A; i++){
    i = Math.pow(i, K)
    console.log(i)
}
