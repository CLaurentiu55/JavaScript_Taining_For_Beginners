/* Given a real number A and an integer N (> 0), find A raised to the power N (i. e., 
    the product of N values of A):

AN = A·A· … ·A. */

var A = 5;
var N = 3;

for (let i = 0; i < A; i++){
    i = Math.pow(A, N)
    console.log(i)
}

