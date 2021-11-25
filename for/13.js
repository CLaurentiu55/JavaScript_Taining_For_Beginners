/* Given an integer N (> 0), find the value of the following expression of N terms 
with alternating signs:

1.1 − 1.2 + 1.3 − … .

Do not use conditional statements.*/

var sum = 0;
var N = 2;

for (i = 1; i < N; i+=0.1){
sum -= N + (sum + N);
}

console.log(sum)