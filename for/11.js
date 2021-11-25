/* Given an integer N (> 0), find the value of a following sum (as an integer):

N2 + (N + 1)2 + (N + 2)2 + … + (2·N)2. */

var sum = 0;
var N = 3;

for (i = 1; i < N; i++){
sum+= (2 * N) * 2;
}

console.log(sum)